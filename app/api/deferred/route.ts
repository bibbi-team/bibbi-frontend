import { AES, enc } from 'crypto-js';
import redisClient from '../../../redis';

export async function POST(
    req: Request,
) {
    const res = await req.json();
    (async() => {
        try {
            const linkId = res.linkId;
            const encryptedData = await retrieveKeyFromRequest(req);
            console.log('encryptedData', encryptedData , 'linkId', linkId);
            // @ts-ignore
            redisClient.set('deferred.'+encryptedData, linkId, 'EX', 3600);
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
    const linkId = await redisClient.get('deferred.'+encryptedData);
    return Response.json({ linkId: linkId });
}

async function retrieveKeyFromRequest(
    req: Request
) {
    const userAgent = req.headers.get('user-agent') || '';
    const checkVersion = (input: string) => /(iPhone|iPad) OS ([1-9]*)_([1-9]*)/g.exec(input);
    const checkDevice = (input: string) => /(iPhone)/g.exec(input)?.[1] || 'unknown';

    const forwarded = req.headers.get('x-forwarded-for');
    const detectedVersion = checkVersion(userAgent);
    const majorVersion = detectedVersion?.[2] ?? 'd';
    const minorVersion = detectedVersion?.[3] ?? 'd';
    const device = checkDevice(userAgent);
    const identifier = forwarded + majorVersion + minorVersion + device;

    const key = process.env.ENC_KEY || '';
    const dataWA = identifier;
    const keyWA = enc.Utf8.parse(key);
    const ivWA = enc.Utf8.parse(key.substring(0, 16));
    const cipher = AES.encrypt(dataWA, keyWA, { iv: ivWA });
    return cipher.ciphertext.toString(enc.Base64url);
}
