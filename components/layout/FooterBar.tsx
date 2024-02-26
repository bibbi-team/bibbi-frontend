import InstagramIcon from '@/assets/instagram.svg';
import GithubIcon from '@/assets/github.svg';
import BehanceIcon from '@/assets/behance.svg';
import Link from "next/link";

export default function FooterBar() {
    return (
        <footer className={"w-full bg-2F2F32 py-6 px-6 text-8c8c8e "}>
            <div className={"flex flex-col justify-center items-start max-w-screen-xl mx-auto w-full"}>
                <div className={"w-full flex-row justify-end items-end"}>
                    <ExternalLinks/>
                </div>
                <div className={"h-3"}/>
                <div>
                    <div className={"text-sm"}>문의 📩</div>
                    <div className={"text-xs"}>55ing.team@gmail.com</div>
                </div>
                <div className={"h-7"}/>
                <div className={"flex flex-col justify-start text-xs gap-1.5 underline"}>
                    <Link href={"/0ed00a05cf74414898b8dbff7614683f"}>
                        <p>업데이트 소식</p>
                    </Link>
                    <Link href={"/25c80b13d89c4fefb908867b74bf6aa9"}>
                        <p>삐삐 이용 약관</p>
                    </Link>
                    <Link href={"/5a00bd90c7674a7e8413901334ee1b24"}>
                        <p>개인정보 처리방침</p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

function ExternalLinks() {
    return (
        <div className={"flex flex-row gap-4 justify-end"}>
            <Link href={"https://www.instagram.com/bibbi_family"}>
                <InstagramIcon />
            </Link>

            <Link href={"https://github.com/bibbi-team"}>
                <GithubIcon />
            </Link>


            <Link href={"https://www.behance.net/gallery/191508405/_"}>
                <BehanceIcon />
            </Link>
        </div>
    )
}
