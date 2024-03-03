import TopHeader from "@/components/TopHeader";
import {Metadata} from "next";
import {terms} from "@/components/strings";

export const metadata: Metadata = {
  title: '이용약관 - 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function Page() {
  return (<div className={"flex flex-col w-screen"}>
    <TopHeader title={"이용 약관"}/>
    <div className={"px-4"}>
      <div className={"h-4"}/>
      <a className={"text-gray-400"}>약관과 정책</a>
      <div className={"h-4"}/>
      <div className={"text-sm text-white"}>
        <div dangerouslySetInnerHTML={{ __html: terms }}/>
      </div>
    </div>
  </div>)
}
