import TopHeader from "@/components/TopHeader";
import {Metadata} from "next";
import {aiTerm} from "@/components/strings";

export const metadata: Metadata = {
  title: 'AI 가족 사진관 이용약관 - 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function AiTerms() {
  return (<div className={"flex flex-col w-screen"}>
    <TopHeader title={"이용 약관"}/>
    <div className={"px-4"}>
      <div className={"h-4"}/>
      <a className={"text-gray-400"}>AI 가족사진관 개인정보처리방침 및 이용약관</a>
      <div className={"h-4"}/>
      <div className={"text-sm text-white"}>
        <div dangerouslySetInnerHTML={{ __html: aiTerm }}/>
      </div>
    </div>
  </div>)
}
