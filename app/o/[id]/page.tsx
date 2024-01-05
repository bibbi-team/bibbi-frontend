"use client"
import {useEffect, useState} from "react";
import Image from "next/image";

export default function Page() {
  const appStoreUrl = 'https://itunes.apple.com/kr/app/id393499958';
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.no5ing.bbibbi';
  const appStoreInfo = (<span>AppStore로 이동중..<br/><a href={appStoreUrl}>직접 이동하기</a></span>);
  const playStoreInfo = (<span>PlayStore로 이동중..<br/><a href={playStoreUrl}>직접 이동하기</a></span>);
  const [platform, setPlatform] = useState<"unknown" | "ios" | "android">("unknown");
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
    if(platform == "ios") {
      setTimeout(() => {
        location.href = appStoreUrl;
      }, 50);
    } else if(platform == "android") {
      setTimeout(() => {
        location.href = playStoreUrl;
      }, 50);
    }

  }, []);
  return <div className={"flex flex-col justify-center items-center h-screen w-screen gap-8"}>
    <Image src="/oing_icon.png" width={200} height={200} />
    <div className={"text-center text-lg text-gray-300"}>
      {platform == "unknown" ? <span>모바일에서만 접근할 수 있어요</span> : (platform == "ios" ? appStoreInfo : playStoreInfo)}
    </div>

  </div>;
}
