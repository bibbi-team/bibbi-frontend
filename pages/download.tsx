import BBiBBiHead from "@/components/BBiBBiHead";
import './globals.css'
import Image from "next/image";
import Link from "next/link";

export default function Download() {
    return <>
        <BBiBBiHead title={"삐삐 - 다운로드"} description={"삐삐를 다운로드해요"}/>
        <div className={"flex flex-col justify-center items-center h-screen w-screen gap-8"}>
            <div className="profile-image">
                <Link href="/">
                    <img width={300}
                         src="https://application-logos.s3.amazonaws.com/067ac952d6a15b3488f7cacefe9e193d.png"
                         alt="image"/>
                </Link>
            </div>
            <div className="pt-3 flex flex-col justify-center items-center">
                <h1 className="text-gray-300 text-2xl">삐삐 - 가족 일상 위젯</h1>
                <p className="text-gray-300 text-xl pt-3">하루에 한 번 가족에게 보내는 생존신고 서비스</p>
                <div className={"flex flex-row justify-center items-center pt-8 gap-3"}>
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.no5ing.bbibbi&pli=1">
                        <Image height={320} width={160} src="/googleplay.png" alt={"playstore"}/>
                    </Link>
                    <Link href="https://apps.apple.com/kr/app/bibbi/id6475082088">
                        <Image height={320} width={160} src="/appstore.png" alt={"appstore"}/>
                    </Link>
                </div>
            </div>
        </div>
    </>
}
