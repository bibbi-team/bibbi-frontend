"use client"
import {useEffect, useState} from "react";
import Image from "next/image";
import {usePathname, useSearchParams} from "next/navigation";

export default function Page() {
  const id = usePathname().split("/").pop();
  const [platform, setPlatform] = useState<"unknown" | "ios" | "android">("unknown");
  const iosTargetUrl = 'https://no5ing.kr/o/'+id + '?retry=1';
  useEffect(() => {
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
    }

  }, []);
  const handleRoute = () => {
    if(platform == "ios") {
      location.href = iosTargetUrl;
    } else if (platform == "android") {
      location.href = 'intent://no5ing.kr/o/'+id+'#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.no5ing.bbibbi;end';
    }
  }
  return <div className={"flex flex-col justify-center items-center h-screen w-screen gap-8"}>
    <Image src="/oing_icon.png" width={200} height={200} alt={"logo"} />
    <div className={"text-center text-lg text-gray-300"}>
      {platform == "unknown" ? <span>모바일에서만 접근할 수 있어요</span> :  <div className={"bg-slate-500 text-gray-300 font-semibold py-3 px-6 rounded-md text-center"} onClick={handleRoute}>앱으로 이동</div>}
    </div>

  </div>;
}
