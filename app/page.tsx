"use client"
import NavigationBar from "@/components/layout/NavigationBar";
import React, {useCallback, useEffect, useState} from "react";
import "./layout.css";
import FooterBar from "@/components/layout/FooterBar";
import {motion} from "framer-motion"
import LandingFirstBibbi from "@/assets/landing_first_bibbi.svg?url";
import LandingSecondBibbi from "@/assets/landing_second_bibbi.svg?url";
import BibbiPhoneSample from "@/assets/bibbi_phone_sample.png"
import BibbiReportSample from "@/assets/bibbi_report_sample.png"
import BibbiShareSample from "@/assets/bibbi_share_sample.png"
import BibbiCalling from "@/assets/bibbi_calling.svg?url";
import BibbiCi from "@/assets/bibbi_ci.svg?url";
import ShiningBibbi from "@/assets/shining_bibbi.svg?url";
import YummyFood from "@/assets/yummy_food.png";
import BeautifulPlace from "@/assets/beautiful_place.png";
import NewHat from "@/assets/new_hat.png";
import Image from "next/image";
import Link from "next/link";

import {detectPlatform} from "@/src/util";

export default function MainPage() {
    const [scrollY, setScrollY] = useState(0);
    const [appDownloadUrl, setAppDownloadUrl] = useState("/");
    const onScroll = useCallback(() => {
        const { pageYOffset } = window;
        setScrollY(pageYOffset);
    }, []);
    useEffect(() => {
        const platform = detectPlatform();
        if (platform === "ios") {
            setAppDownloadUrl("https://itunes.apple.com/kr/app/id6475082088");
        } else if(platform === "android") {
            setAppDownloadUrl("https://play.google.com/store/apps/details?id=com.no5ing.bbibbi");
        }

        const { pageYOffset } = window;
        setScrollY(pageYOffset);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);
    const [isNavBarFull, setIsNavBarFull] = useState(true);

    useEffect(() => {
        setIsNavBarFull(scrollY > 100);
    }, [scrollY]);
    return <div>
        <header className={"fixed z-40 top-0"}>
            <NavigationBar isFull={isNavBarFull} appDownloadUrl={appDownloadUrl}/>
        </header>

        <div className={"flex flex-col justify-start items-start"}>
            <FirstSlide appDownloadUrl={appDownloadUrl}/>
            <SecondSlide/>
            <ThirdSlide/>
            <FourthSlide/>
            <FifthSlide/>
            <SixthSlide/>
            <Las2tSlide/>
            <LastSlide/>
            <TotoSlide/>
        </div>

        <footer>
            <FooterBar />
        </footer>
    </div>
}

function FirstSlide({appDownloadUrl}: {appDownloadUrl: string}) {
    return (<div className={"flex flex-col justify-between items-center h-dvh w-screen bg-yellow-100 text-black pt-16 "}
    style={{
        background: "url('/bibbi_repeatable_background.svg')",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
        height: "100svh"
    }}>
        <div className={"grow"}>
            <motion.div
                className={"grow flex flex-col justify-center items-center h-full"}
                key={"first-page-cnt"}
                transition={{ delay: 0.5 }}
                exit={{ opacity:0 }}
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
            >
                <div className={"flex flex-col justify-center items-center"}>
                    <p className={"text-center font-extrabold text-4xl leading-snug text-bsdg932wf"}>
                        하루 한번, <br/>
                        가족에게 보내는<br/>
                        생존신고, 삐삐
                    </p>
                    <div className={"h-4"}/>
                    <Link href={appDownloadUrl}>
                        <div className={"rounded-3xl bg-a39d px-6 py-4 w-fit"}>
                            <div className={"text-base text-white text-center leading-none font-bold"}>
                                <span>앱 다운로드</span>
                            </div>
                        </div>
                    </Link>
                    <div className={"h-16"}/>
                </div>
            </motion.div>
        </div>
        <div>
            <Image src={BibbiCalling} alt={"bibbi_hi"}/>
        </div>

    </div>)
}


function SecondSlide() {
    return (<div className={"flex flex-col justify-between items-start w-screen text-white py-16 px-8 bg-19191a"}>
            <div className={"font-extrabold text-2xl leading-snug"}>
                <p>
                    <span className={"text-f5f378"}>가족의 하루</span>를
                </p>
                <p>
                    알고 계시나요?
                </p>
            </div>
            <div className={"h-4"}/>
            <div className={"text-b2b2b4 text-base"}>
                <p>친구와는 SNS로</p>
                <p>서로의 일상을 알고있지만,</p>
                <p>가족과는 그러기 쉽지 않죠</p>
            </div>
            <div className={"h-8"}/>
            <Image className={"w-full"} src={LandingFirstBibbi} alt={"bibbi_hi"}/>
    </div>)
}

function ThirdSlide() {
    return (<div className={"flex flex-col justify-between items-start w-screen text-white py-16 px-8 bg-19191a"}>
        <div className={"font-extrabold text-2xl leading-snug"}>
            <p>
                <span className={"text-ff99b1"}>너무 잦은 연락</span>은
            </p>
            <p>
                부담스러울수도 있어서
            </p>
            <p>
                서로 안하게 되구요
            </p>
        </div>
        <div className={"h-20"}/>
        <Image className={"w-full"} src={LandingSecondBibbi} alt={"bibbi_hi"}/>
    </div>)
}

function FourthSlide() {
    return (<div className={"flex flex-col justify-between items-start w-screen text-white bg-f5f378"}>
        <div className={"font-extrabold text-2xl text-black leading-snug pt-16 px-8"}>
            <p>
                하루 딱 한번의
            </p>
            <p>
                생존신고라면 어떨까요?
            </p>
        </div>
        <Image className={"w-full"} src={BibbiReportSample} alt={"bibbi_hi"}/>
    </div>)
}

function FifthSlide() {
    return (<div className={"flex flex-col justify-between items-start w-screen text-white bg-a39d"}>
        <div className={"font-extrabold text-2xl leading-snug py-16 px-8"}>
            <p>
                단순히 공유하고 싶은
            </p>
            <p>
                일상을 찍고,
            </p>
            <p>
                업로드만 하면 끝이에요.
            </p>
        </div>
        <Image className={"w-full"} src={BibbiShareSample} alt={"bibbi_hi"}/>
    </div>)
}

function SixthSlide() {
    return (<div className={"flex flex-col justify-between items-start w-screen text-white bg-19191a"} style={{
        background: "url('/bibbi_matrix.svg')",
        backgroundSize: "auto 100%",
        backgroundPosition: "cover",
        opacity: 0.8,
        zIndex: 0,
    }}>
        <div className={"font-extrabold text-2xl leading-snug py-16 px-8"}>
            <p>
                오늘 내가 먹은
            </p>
            <p>
                맛있는 밥
            </p>
            <div className={"h-4"}/>
            <Image src={YummyFood} width={200} alt={"bibbi_hi"}/>
        </div>

        <div className={"w-full flex flex-col items-end font-extrabold text-2xl leading-snug px-8 text-right"}>
            <p>
                친구와 함께간
            </p>
            <p>
                멋진 장소
            </p>
            <div className={"h-4"}/>
            <Image src={BeautifulPlace} width={200} alt={"bibbi_hi"}/>
        </div>

        <div className={"w-full flex flex-col items-start font-extrabold text-2xl leading-snug py-16 px-8 text-right"}>
            <p>
                편집샵에서
            </p>
            <p>
                새로 산 모자
            </p>
            <div className={"h-4"}/>
            <Image src={NewHat} width={200} alt={"bibbi_hi"}/>
        </div>
    </div>)
}

function Las2tSlide() {
    return (<div className={"flex flex-col justify-between items-start w-screen text-white  bg-f5f378"}>
        <div className={"font-extrabold text-3xl leading-snug text-black pt-16 px-8"}>
            <p>
                더이상 친구들에게만
            </p>
            <p>
                공유하지 마세요!
            </p>
        </div>
        <Image className={"w-full"} src={ShiningBibbi} alt={"bibbi_hi"}/>
    </div>)
}


function LastSlide() {
    return (<div className={"flex flex-col justify-between items-center w-screen text-white bg-353538 z-10"}
                 >
        <div className={"font-extrabold text-2xl text-center  pt-16 px-8"}>
            <p>
                하루에 10초만 투자하고
            </p>
            <p className={"text-f5f378"}>
                가족과 가까워지세요
            </p>
        </div>
        <div className={"z-0"} style={{
            background: "url('/floating_bibbi.svg')",
            backgroundSize: "auto 100%",
            backgroundPosition: "cover",
            opacity: 0.8,
            zIndex: 0,
        }}>
            <Image className={"w-full"} src={BibbiPhoneSample} alt={"bibbi_hi"} />
        </div>

    </div>)
}


function TotoSlide() {
    return (<div className={"flex flex-col justify-between items-center w-screen text-white py-16 px-8 bg-a39d gap-6"}
                 style={{
                     background: "url('/bibbi_repeatable_background.svg')",
                     backgroundSize: "auto 100%",
                     backgroundPosition: "center",
                 }}>
        <div className={"flex flex-col items-center justify-center gap-5"}>
            <Image src={BibbiCi} alt={"bibbi_ci"}/>
            <div className={"font-extrabold text-center text-2xl leading-snug text-black"}>
                <p>
                    지금 바로, 가족과 함께
                </p>
                <p>
                    시작해보세요 ❤
                </p>
            </div>
        </div>
        <div className={"flex flex-row justify-center items-center pt-8 gap-3"}>
            <Link
                href="https://play.google.com/store/apps/details?id=com.no5ing.bbibbi&pli=1">
                <Image height={300} width={150} src="/googleplay.png" alt={"playstore"}/>
            </Link>
            <Link href="https://apps.apple.com/kr/app/bibbi/id6475082088">
                <Image height={300} width={150} src="/appstore.png" alt={"appstore"}/>
            </Link>
        </div>

    </div>)
}

