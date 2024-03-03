"use client"
import "../global.css";
import PageLogo from '@/assets/bibbi_logo.svg'
import * as React from "react";
import {motion, LayoutGroup} from "framer-motion"
import Link from "next/link";
import {useEffect, useState} from "react";
import {detectPlatform} from "@/src/util";
import {useViewPortDetector} from "@/components/WindowDimensions";

export default function NavigationBar({isFull}: {isFull: boolean}) {
    const [appDownloadUrl, setAppDownloadUrl] = useState("/download");
    const isMobile = useViewPortDetector();
    useEffect(() => {
        const platform = detectPlatform();
        if (platform === "ios") {
            setAppDownloadUrl("https://itunes.apple.com/kr/app/id6475082088");
        } else if (platform === "android") {
            setAppDownloadUrl("https://play.google.com/store/apps/details?id=com.no5ing.bbibbi");
        }
    }, []);
   return <LayoutGroup>
       {isFull &&
           <motion.div
               key={"full-nav-bar"}
               exit={{ opacity:0 }}
               initial={{ opacity:0 }}
               animate={{ opacity:1 }}
           >
               <FullNavigationBar isMobile={isMobile} appDownloadUrl={appDownloadUrl}/>
           </motion.div>}
       {!isFull &&  <motion.div
           key={"titled-nav-bar"}
           exit={{ opacity:0 }}
           initial={{ opacity:0 }}
           animate={{ opacity:1 }}
       ><TitledNavigationBar isMobile={isMobile}/>
       </motion.div>}
   </LayoutGroup>
}

function FullNavigationBar({appDownloadUrl, isMobile}: {appDownloadUrl: string, isMobile: boolean}) {
    return <div className={"flex flex-row justify-between items-center w-screen bg-a39d text-white py-3.5 px-5 z-20 "}>
        <div className={"max-w-screen-xl mx-auto w-full flex flex-row justify-between items-center"}>
            <div className={"flex gap-4 items-center"}>
                <Link href={"/"} title={"bibbi"}>
                    <PageLogo className={"fill-s938f"}/>
                </Link>
            </div>
            <div className={"flex gap-4 items-center"}>
                {isMobile ? <Link href={appDownloadUrl}>
                    <AppDownloadButton/>
                </Link>: <NavigationBarLinks isFull={true}/> }
            </div>
        </div>

    </div>
}

function TitledNavigationBar({isMobile}: {isMobile: boolean}) {
    return <div className={"flex justify-between items-center w-screen text-white py-3.5 px-5 z-20"}>
        <div className={"max-w-screen-xl mx-auto w-full flex flex-row justify-between items-center"}>
            <div className={"flex gap-4 items-center"}>
                <Link href={"/"} title={"bibbi"}>
                    <PageLogo className={"fill-s1938f33"}/>
                </Link>
            </div>
            <div className={"flex gap-4 items-center"}>
                {isMobile ? <div className={"h-8"}/>: <NavigationBarLinks isFull={false}/> }
            </div>
        </div>

    </div>
}

function NavigationBarLinks({isFull}: {isFull: boolean}) {
    return <div className={"inline"}>
        <ul className={isFull ? "flex flex-row gap-x-8 text-slate-50 text-lg font-light" : "flex flex-row gap-x-8 text-black text-lg font-medium"}>
            <li><Link href={"/"}>소개 페이지</Link></li>
            <li><Link href={"/0ed00a05cf74414898b8dbff7614683f"}>공지사항</Link></li>
            <li><Link href={"/download"}>다운로드</Link></li>
        </ul>
    </div>
}

function AppDownloadButton() {
    return <div className={"flex gap-4 items-center rounded-3xl bg-239f px-4 py-2.5"}>
        <div className={"text-sm text-bsdg932wf leading-none font-bold"}>앱 다운로드</div>
    </div>
}
