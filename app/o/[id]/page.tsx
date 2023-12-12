"use client"
import {useEffect, useState} from "react";

export default function Page() {
  const appStoreUrl = 'https://itunes.apple.com/kr/app/id393499958';
  const [isIphone, setIsIphone] = useState(false);
  useEffect(() => {
    const isIphone = () => {
      const unknownWindow = ((window as unknown) as any);
      const userAgent = navigator.userAgent || navigator.vendor || unknownWindow.opera;
      if (/iPad|iPhone|iPod/.test(userAgent) && !unknownWindow.MSStream) return true;
      return false;
    }

    const iphone = isIphone();
    if(iphone) {
      setTimeout(() => {
        location.href = appStoreUrl;
      }, 50);
    }
    setIsIphone(iphone);
  }, []);
  return <>
    {!isIphone ? <span>iPhone만 접근할 수 있습니다.</span> : <span>AppStore로 이동중..<br/><a href={appStoreUrl}>직접 이동하기</a></span>}
  </>;
}
