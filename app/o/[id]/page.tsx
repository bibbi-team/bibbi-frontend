"use client"
import {useEffect, useState} from "react";

export default function Page() {
  const appStoreUrl = 'https://itunes.apple.com/kr/app/id393499958';
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.no5ing.bbibbi';
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
  return <>
    {platform == "unknown" ? <span>모바일에서만 접근할 수 있습니다.</span> : <span>AppStore로 이동중..<br/><a href={appStoreUrl}>직접 이동하기</a></span>}
  </>;
}
