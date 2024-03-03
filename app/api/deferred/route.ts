import { AES, enc } from 'crypto-js';
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import {firestore} from "@/firebase/firebase";


export async function POST(
    req: Request,
) {
    const res = await req.json();
    (async() => {
        try {
            const linkId = res.linkId;
            const encryptedData = await retrieveKeyFromRequest(req);
            console.log('encryptedData', encryptedData , 'linkId', linkId);
            addDoc(collection(firestore, "deferred", encryptedData), {
                linkId: linkId,
            });
        }catch(e) {
            console.log(e);
        }
    })();
    return Response.json({ success: true })
}

export async function GET(
    req: Request
) {
    const encryptedData = await retrieveKeyFromRequest(req);
    const linkId = await getDoc(doc(firestore,"deferred",encryptedData));
    const data = (linkId.data as unknown) as any
    return Response.json({ linkId: data?.linkId });
}

async function retrieveKeyFromRequest(
    req: Request
) {
    const userAgent = req.headers.get('user-agent') || '';
    const checkVersion = (input: string) => /(iPhone|iPad) OS ([1-9]*)_([1-9]*)/g.exec(input);
    const checkDevice = (input: string) => /(iPhone)/g.exec(input)?.[1] || 'unknown';

    const forwarded = req.headers.get('cf-connecting-ip');
    const detectedVersion = checkVersion(userAgent);
    const majorVersion = detectedVersion?.[2] ?? 'd';
    const minorVersion = detectedVersion?.[3] ?? 'd';
    const device = checkDevice(userAgent);
    const identifier = forwarded + majorVersion + minorVersion + device;
    console.log('identifier', identifier);
    console.log(req.headers);

    const key = process.env.ENC_KEY || '';
    const dataWA = identifier;
    const keyWA = enc.Utf8.parse(key);
    const ivWA = enc.Utf8.parse(key.substring(0, 16));
    const cipher = AES.encrypt(dataWA, keyWA, { iv: ivWA });
    return cipher.ciphertext.toString(enc.Base64url);
}
