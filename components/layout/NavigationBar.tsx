"use client"
import "../global.css";
import PageLogo from '@/assets/bibbi_logo.svg'
import * as React from "react";
import {motion, LayoutGroup} from "framer-motion"
import Link from "next/link";
import {useEffect, useState} from "react";
import {detectPlatform} from "@/src/util";

export default function NavigationBar({isFull}: {isFull: boolean}) {
    const [appDownloadUrl, setAppDownloadUrl] = useState("/");
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
               <FullNavigationBar appDownloadUrl={appDownloadUrl}/>
           </motion.div>}
       {!isFull &&  <motion.div
           key={"titled-nav-bar"}
           exit={{ opacity:0 }}
           initial={{ opacity:0 }}
           animate={{ opacity:1 }}
       ><TitledNavigationBar/>
       </motion.div>}
   </LayoutGroup>
}

function FullNavigationBar({appDownloadUrl}: {appDownloadUrl: string}) {
    return <div className={"flex justify-between items-center w-screen bg-a39d text-white py-3.5 px-5 z-20"}>
        <div className={"flex gap-4 items-center"}>
            <Link href={"/"}>
                <PageLogo className={"fill-s938f"}/>
            </Link>
        </div>
        <div className={"flex gap-4 items-center"}>
            <Link href={appDownloadUrl}>
                <AppDownloadButton/>
            </Link>
        </div>
    </div>
}

function TitledNavigationBar() {
    return <div className={"flex justify-between items-center w-screen text-white py-3.5 px-5 z-20"}>
        <div className={"flex gap-4 items-center"}>
            <Link href={"/"}>
                <PageLogo className={"fill-s1938f33"}/>
            </Link>
        </div>
        <div className={"flex gap-4 items-center"}>
            <div className={"h-8"}/>
        </div>
    </div>
}

function AppDownloadButton() {
    return <div className={"flex gap-4 items-center rounded-3xl bg-239f px-4 py-2.5"}>
        <div className={"text-sm text-bsdg932wf leading-none font-bold"}>앱 다운로드</div>
    </div>
}
