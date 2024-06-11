"use client"
import {useEffect, useState} from "react";
import Image from "next/image";
import Fire from '@/public/fire.svg'
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
  const [viewData, setViewData] = useState<{
      familyId: string,
      familyName: string,
      familyMembersProfileImageUrls: string[],
      extraFamilyMembersCount: number,
      familyMembersCount: number,
      inviterName: string,
      survivalCount: number,
      isRequesterJoinedFamily: boolean
  } | null>(null);
  useEffect(() => {
      analytics;
    const detectPlatform = () => {
      const unknownWindow = ((window as unknown) as any);
      const userAgent = navigator.userAgent || navigator.vendor || unknownWindow.opera;
      if (/iPad|iPhone|iPod/.test(userAgent) && !unknownWindow.MSStream) return "ios";
      if (/android/i.test(userAgent)) return "android";
      return "unknown";
    }

    axios.get('https://dev.api.no5ing.kr/v1/view/family-invite/' + id).then((res) => {
        const data = res.data;
        if(data?.error) {
         //   alert(data.error);
            return;
        }
        setViewData(data);

    });

    const platform = detectPlatform();
    setPlatform(platform);

  }, []);
  const handleRoute = () => {
    if(platform == "ios") {
      location.href = retry ? appStoreUrl : 'https://no5ing.kr/o/'+id + '?retry=1';
    } else if (platform == "android") {
      location.href = 'intent://no5ing.kr/o/'+id+'#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.no5ing.bbibbi;end';
    }
  }
  const Images = () => {
      const arr = [];
      const dataSize = viewData?.familyMembersProfileImageUrls?.length ?? 0;
      const remainSize = viewData?.extraFamilyMembersCount ?? 0;
      if(viewData) {
        for(let i = 0; i < viewData?.familyMembersProfileImageUrls?.length; i++) {
          const item = viewData.familyMembersProfileImageUrls[i];
          arr.push(
            <CircleImage imageUrl={item} index={i}/>
          )
        }
      }
    return <div style={{
        display: 'block',
        marginLeft: dataSize * 40,
    }}>{arr}
        {remainSize > 0 && <RemainBox remain={remainSize} size={dataSize}/>}
    </div>;
  };
  return <div className={"flex flex-col justify-between items-center h-screen w-screen gap-8"}>
      <div className={"flex flex-col items-center"}>
          <div className={"h-12"}/>
          <div className={"h-12"}/>
          <div style={{
              backgroundColor: '#2F2F32',
              padding: '7px 14px 7px 14px',
              borderRadius: '70px',
              width: 'fit-content',
          }}>
              <a style={{color: '#D3D3D3'}}>{viewData?.familyName}</a>
          </div>
          <div className={"h-8"}/>
          <Images/>
          <div className={"h-3"}/>
          <a style={{color: '#B2B2B4'}}>{viewData?.familyMembersCount}명의 구성원</a>
          <div className={"h-8"}/>
          <div style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
          }}>
              <a style={{fontSize: '24px', color: '#D3D3D3', fontWeight: 600}}>{viewData?.inviterName}님이 가족 방에 초대했어요</a>
              <a style={{fontSize: '16px', color: '#B2B2B4', fontWeight: 400}}>10-24시 사이 단 한 번의 사진 업로드로<br/>가족과 가까워지세요.</a>
          </div>
      </div>

      <div style={{
          width: '100%',
          padding: '12px 12px 24px 12px',
            display: 'flex',
            flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
      }}>
          {
              viewData && viewData?.survivalCount > 0 && <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3px'}}>
                  <Fire style={{display: 'inline-block'}}/>
                  <span style={{color: '#B2B2B4'}}>이미 <span style={{color: '#F5F378'}}>{viewData?.survivalCount}</span>번의 생존신고를 완료했어요</span>
              </div>
          }


          <div style={{
              width: '100%',
              backgroundColor: '#F5F378',
              borderRadius: '100px',
              padding: '18px 0 18px 0',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 600
          }} onClick={handleRoute}>
            가족 방 입장하기
          </div>
      </div>


  </div>;
}

function CircleImage({imageUrl, index}: {imageUrl: string, index: number}) {
    return <img src={imageUrl} style={{
        borderRadius: '40px',
        border: '6px solid #242427',
        left: index * -40,
        position: 'relative',
        display: 'inline-block',
        width: '80px',
        height: '80px',
    }} alt={"삐삐"} width={80} height={80}/>
}

function RemainBox({remain, size}: {remain: number, size: number}) {
    return <div style={{
        width: '80px',
        height: '80px',
        border: '6px solid #242427',
        borderRadius: '40px',
        backgroundColor: '#353538',
        display: 'inline-block',
        position: 'relative',
        left: size * -40,
    }}>
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#D3D3D3',
            fontSize: '24px',
            fontWeight: 600
        }}>
            +{remain}
        </div>

    </div>
}
