import TopHeader from "@/components/TopHeader";
import {Metadata} from "next";
import {privacy} from "@/components/strings";

export const metadata: Metadata = {
  title: '개인정보처리방침 - 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function Page() {
  return (<div className={"flex flex-col w-screen"}>
    <TopHeader title={"개인정보처리방침"}/>
    <div className={"px-4"}>
      <div className={"h-4"}/>
      <a className={"text-gray-400"}>개인정보 처리방침</a>
      <div className={"h-4"}/>
      <div className={"text-sm text-white"}>
        <div dangerouslySetInnerHTML={{ __html: privacy }}/>
      </div>
    </div>
  </div>)
}
