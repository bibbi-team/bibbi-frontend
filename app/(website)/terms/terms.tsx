"use client"
import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import {terms} from "@/components/strings";
import {useViewPortDetector} from "@/components/WindowDimensions";

export default function Terms() {
    const isMobile = useViewPortDetector();
    return <>
        <header className={"fixed z-40 top-0"}>
            <NavigationBar isFull={true}/>
        </header>
        <div className={"w-full flex flex-col justify-center items-center pt-24 pb-8"}>
                <div className={isMobile ? "w-full px-8" : "max-w-screen-xl mx-auto w-full"}>
                    <div className={"text-2xl text-white"}>
                        삐삐 이용약관
                    </div>
                    <div className={"text-base text-white pt-8"}>
                        <div dangerouslySetInnerHTML={{ __html: terms }}/>
                    </div>
                </div>
        </div>
    </>
}
