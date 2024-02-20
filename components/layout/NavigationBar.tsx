import "../global.css";
import PageLogo from '@/assets/bibbi_logo.svg'
import * as React from "react";
import {motion, AnimatePresence, AnimateSharedLayout, LayoutGroup} from "framer-motion"
import Link from "next/link";
export default function NavigationBar({isFull, appDownloadUrl}: {isFull: boolean, appDownloadUrl: string}) {
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
            <PageLogo className={"fill-s938f"}/>
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
            <PageLogo className={"fill-s1938f33"}/>
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
