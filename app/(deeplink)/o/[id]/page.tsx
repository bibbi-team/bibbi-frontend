"use client"
import {useEffect, useState} from "react";
import Image from "next/image";
import BiBBiMain from '@/public/bbibbi_main.svg'
import {usePathname, useSearchParams} from "next/navigation";
import axios from "axios";
import {analytics} from "@/firebase/firebase";

export default function Page() {
  const id = usePathname()?.split("/")?.pop();
  const searchParams = useSearchParams();
  const appStoreUrl = 'https://itunes.apple.com/kr/app/id6475082088';
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.no5ing.bbibbi' + (id ? '&referrer='+id : '');
  const [platform, setPlatform] = useState<"unknown" | "ios" | "android">("unknown");
  const retry = searchParams?.get("retry");
  useEffect(() => {
      analytics;
    const detectPlatform = () => {
      const unknownWindow = ((window as unknown) as any);
      const userAgent = navigator.userAgent || navigator.vendor || unknownWindow.opera;
      if (/iPad|iPhone|iPod/.test(userAgent) && !unknownWindow.MSStream) return "ios";
      if (/android/i.test(userAgent)) return "android";
      return "unknown";
    }

    const platform = detectPlatform();
    setPlatform(platform);
     if(platform == "android") {
      setTimeout(() => {
        location.href = 'intent://no5ing.kr/o/'+id+'#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.no5ing.bbibbi;end';
      }, 50);
    } else if(platform == "ios" && !retry) {
       setTimeout(() => {
         location.href = 'https://link.no5ing.kr/links/'+id;
       }, 50);
     } else if(platform == "ios" && retry) {
         setTimeout(() => {
             axios.post('/api/deferred', {
                 linkId: id,
             }).then((res) => {
                 location.href = appStoreUrl;
             }).catch((err) =>{
                 console.log(err);
                 location.href = appStoreUrl;
             });
         }, 50);
     }

  }, []);
  const handleRoute = () => {
    if(platform == "ios") {
      location.href = retry ? appStoreUrl : 'https://no5ing.kr/o/'+id + '?retry=1';
    } else if (platform == "android") {
      location.href = 'intent://no5ing.kr/o/'+id+'#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.no5ing.bbibbi;end';
    }
  }
  return <div className={"flex flex-col justify-center items-center h-screen w-screen gap-8"}>
    <BiBBiMain  width={335} height={182} alt={"logo"} />
    <div className={"text-center text-lg text-gray-300"}>
      {platform == "unknown" ? <span>모바일에서만 접근할 수 있어요</span> :  <div className={"bg-slate-500 text-gray-300 font-semibold py-3 px-6 rounded-md text-center"} onClick={handleRoute}>앱으로 이동</div>}
    </div>

  </div>;
}
