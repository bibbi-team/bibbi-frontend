import Image from "next/image";
import verySad from '../public/very_sad.svg'

export default function NotFound() {
    return <div className={"flex flex-col justify-center items-center h-screen w-screen gap-8"}>
        <Image src={verySad} width={200} height={200} alt={"logo"} />
        <div className={"text-center text-lg text-gray-300"}>
            <span>페이지를 찾을 수 없어요</span>
        </div>
    </div>
}
