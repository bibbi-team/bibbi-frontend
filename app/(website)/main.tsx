"use client"

import React, {useCallback, useEffect, useState} from "react";
import {motion} from "framer-motion"
import LandingFirstBibbi from "@/assets/landing_first_bibbi.svg?url";
import LandingSecondBibbi from "@/assets/landing_second_bibbi.svg?url";
import BibbiPhoneSample from "@/assets/bibbi_phone_sample.png"
import BibbiReportSample from "@/assets/bibbi_report_sample.png"
import BibbiShareSample from "@/assets/bibbi_share_sample.png"
import BibbiCalling from "@/assets/bibbi_calling.png";
import BibbiCi from "@/assets/bibbi_ci.svg?url";
import ShiningBibbi from "@/assets/shining_bibbi.svg?url";
import YummyFood from "@/assets/yummy_food.png";
import BeautifulPlace from "@/assets/beautiful_place.png";
import NewHat from "@/assets/new_hat.png";
import Image from "next/image";
import Link from "next/link";
import {detectPlatform} from "@/src/util";
import NavigationBar from "@/components/layout/NavigationBar";
import useWindowDimensions from "@/components/WindowDimensions";
import { useViewPortDetector } from "@/components/WindowDimensions";


export default function Main() {
    const [scrollY, setScrollY] = useState(0);
    const isMobile = useViewPortDetector();
    const [appDownloadUrl, setAppDownloadUrl] = useState("/download");
    const onScroll = useCallback(() => {
        const {pageYOffset} = window;
        setScrollY(pageYOffset);
    }, []);
    useEffect(() => {
        const platform = detectPlatform();
        if (platform === "ios") {
            setAppDownloadUrl("https://itunes.apple.com/kr/app/id6475082088");
        } else if (platform === "android") {
            setAppDownloadUrl("https://play.google.com/store/apps/details?id=com.no5ing.bbibbi");
        }

        const {pageYOffset} = window;
        setScrollY(pageYOffset);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    const [isNavBarFull, setIsNavBarFull] = useState(false);

    useEffect(() => {
        setIsNavBarFull(scrollY > 100);
    }, [scrollY]);
    return <>
        <header className={"fixed z-40 top-0"}>
            <NavigationBar isFull={isNavBarFull}/>
        </header>
        <div className={"flex flex-col justify-start items-start w-full"}>
            <FirstSlide appDownloadUrl={appDownloadUrl} isMobile={isMobile}/>
            <SecondSlide isMobile={isMobile}/>
            <ThirdSlide isMobile={isMobile}/>
            <FourthSlide isMobile={isMobile}/>
            <FifthSlide isMobile={isMobile}/>
            <SixthSlide isMobile={isMobile}/>
            <Las2tSlide isMobile={isMobile}/>
            <LastSlide isMobile={isMobile}/>
            <TotoSlide isMobile={isMobile}/>
        </div>
    </>
}

function FirstSlide({appDownloadUrl, isMobile}: { appDownloadUrl: string, isMobile: boolean }) {
    return (<div className={"flex flex-col justify-between items-center h-dvh w-screen bg-yellow-100 text-black pt-16 "}
                 style={{
                     background: "url('/infinite_bibbi.png')",
                     backgroundSize: "auto 100%",
                     backgroundPosition: "center",
                     height: "100svh",
                     backgroundColor: "#F5F378",
                 }}>
        <div className={"grow"}>
            <motion.div
                className={"grow flex flex-col justify-center items-center h-full"}
                key={"first-page-cnt"}
                transition={{delay: 0.5, duration: 1.0}}
                exit={{opacity: 0,  transform: "translate3d(0, -10%, 0)"}}
                initial={{opacity: 0,  transform: "translate3d(0, -10%, 0)"}}
                animate={{opacity: 1,  transform: "translate3d(0, 0, 0)"}}
            >
                <div className={"flex flex-col justify-center items-center"}>
                    <p className={
                        isMobile ? "text-center font-extrabold text-4xl leading-snug text-bsdg932wf":
                            "text-center font-extrabold text-5xl leading-snug text-bsdg932wf"}>
                        하루 한번, <br/>
                        가족에게 보내는<br/>
                        생존신고, 삐삐
                    </p>
                    <div className={isMobile? "h-4" : "h-8"}/>
                    <Link href={appDownloadUrl} title={"App download"}>
                        <div className={isMobile ? "rounded-3xl bg-a39d px-6 py-4 w-fit" : "rounded-3xl bg-a39d px-8 py-6 w-fit"}>
                            <div className={isMobile ? "text-base text-white text-center leading-none font-bold" :
                                "text-2xl text-white text-center leading-none font-bold"}>
                                <span>앱 다운로드</span>
                            </div>
                        </div>
                    </Link>
                    <div className={"h-16"}/>
                </div>
            </motion.div>
        </div>
        <div>
            <Image src={BibbiCalling} alt={"bibbi_hi"} width={278}/>
        </div>

    </div>)
}


function SecondSlide({isMobile}: { isMobile: boolean}) {
    return (<>
        <motion.div
            key={"second-slide-a"}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className={isMobile ? "flex flex-col justify-between items-start w-screen text-white py-16 px-8"
                : "flex flex-row justify-between items-center text-white py-20 px-16 max-w-screen-xl mx-auto w-full pt-48"}
            transition={{
                delay: 0.5,
                duration: 1.0
            }}
            variants={{
                visible: {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)"
                },
                hidden: {
                    opacity: 0,
                    transform: "translate3d(0, -10%, 0)"
                }
            }}
        >
            <div className={"flex flex-col"}>
                <div className={isMobile ? "font-extrabold text-2xl leading-snug" : "font-extrabold text-4xl leading-snug"}>
                    <p>
                        <span className={"text-f5f378"}>가족의 하루</span>를
                    </p>
                    <p>
                        알고 계시나요?
                    </p>
                </div>
                <div className={"h-4"}/>
                <div className={isMobile ? "text-b2b2b4 text-base" : "text-b2b2b4 text-2xl"}>
                    <p>친구와는 SNS로</p>
                    <p>서로의 일상을 알고있지만,</p>
                    <p>가족과는 그러기 쉽지 않죠</p>
                </div>
                <div className={isMobile? "h-8": ""}/>
            </div>

            <Image className={isMobile ? "w-full" : "w-96"} src={LandingFirstBibbi} alt={"bibbi_hi"}/>
        </motion.div>


    </>)
}

function ThirdSlide({isMobile}: { isMobile: boolean}) {
    return (<>
        <motion.div
            key={"second-slide-a"}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className={isMobile ? "flex flex-col justify-between items-start w-screen text-white py-16 px-8 bg-19191a"
                : "flex flex-row-reverse justify-between items-center w-screen text-white py-24 px-16 bg-19191a max-w-screen-xl mx-auto w-full pb-48"}
            transition={{
                delay: 0.5,
                duration: 1.0
            }}
            variants={{
                visible: {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)"
                },
                hidden: {
                    opacity: 0,
                    transform: "translate3d(0, -10%, 0)"
                }
            }}
        >
            <div className={isMobile ? "font-extrabold text-2xl leading-snug" : "font-extrabold text-4xl leading-snug"}>
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
            <div className={isMobile? "h-20": ""}/>
            <Image className={isMobile ? "w-full" : "w-96"} src={LandingSecondBibbi} alt={"bibbi_hi"}/>
        </motion.div>

    </>)
}

function FourthSlide({isMobile}: { isMobile: boolean}) {
    return (<div className={isMobile ? "flex flex-col justify-between items-start w-screen text-white bg-f5f378 w-full":
        "w-screen text-white bg-f5f378 w-full"}>
        <div className={isMobile? "flex flex-col justify-between items-start max-w-screen-xl mx-auto w-full" : "flex flex-row justify-between items-start max-w-screen-xl mx-auto w-full"}>
            <div>
                <div className={isMobile? "": "h-8"}/>
                <div className={isMobile ? "font-extrabold text-2xl text-black leading-snug pt-16 px-8 ":
                    "font-extrabold text-4xl text-black leading-snug pt-16 px-8 w-fit"}>
                    <p>
                        하루 딱 한번의
                    </p>
                    <p>
                        <span>생존신고</span>라면 어떨까요?
                    </p>
                </div>
            </div>

            <div>
                <div className={isMobile? "": "h-5"}/>
                <Image style={{
                    width: isMobile ? "100%" : "36rem",
                }} src={BibbiReportSample} alt={"bibbi_hi"}/>
            </div>

        </div>

    </div>)
}

function FifthSlide({isMobile}: { isMobile: boolean}) {
    return (<div className={"w-screen text-white bg-a39d w-full"}>
        <div className={"max-w-screen-xl mx-auto w-full"}>
            <div className={isMobile ? "flex flex-col justify-between items-start": "flex flex-row-reverse justify-between items-start pt-24"}>
                <div className={isMobile ? "font-extrabold text-2xl leading-snug py-16 px-8" :
                    "font-extrabold text-3xl leading-snug py-16 px-8"}>
                    <p>
                        단순히 공유하고 싶은
                    </p>
                    <p>
                        일상을 <span className={"text-f5f378"}>찍고</span>,
                    </p>
                    <p>
                        <span className={"text-ff99b1"}>업로드</span> 하면 끝이에요.
                    </p>
                </div>
                <div>
                    <div className={isMobile? "": "h-14"}/>
                    <Image style={{
                        width: isMobile ? "100%" : "40rem",
                    }} src={BibbiShareSample} alt={"bibbi_hi"}/>
                </div>

            </div>

        </div>
    </div>)
}

function SixthSlide({isMobile}: { isMobile: boolean}) {
    const textStyle = "font-extrabold text-2xl leading-snug py-16 px-8";
    return (<div className={"flex flex-col justify-between items-start text-white bg-19191a w-full"} style={{
        background: "url('/bibbi_matrix.svg')",
        backgroundSize: "auto 100%",
        backgroundPosition: "cover",
        opacity: 0.8,
        zIndex: 0,
    }}>
        <motion.div
            key={"sixth-slide-a"}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className={"max-w-screen-xl mx-auto w-full"}
            transition={{
                delay: 0.5,
                duration: 1.0
            }}
            variants={{
                visible: {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)"
                },
                hidden: {
                    opacity: 0,
                    transform: "translate3d(0, -10%, 0)"
                }
            }}
        >
            <div className={isMobile ? "font-extrabold text-2xl leading-snug py-16 px-8" : "font-extrabold text-3xl leading-snug py-16 px-8"}>
                <p>
                    오늘 내가 먹은
                </p>
                <p>
                    맛있는 밥
                </p>
                <div className={"h-4"}/>
                <Image src={YummyFood} height={isMobile? 200 : 300} width={isMobile? 200 : 300} alt={"bibbi_hi"}/>
            </div>
        </motion.div>


        <motion.div
            key={"sixth-slide-a"}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className={"max-w-screen-xl mx-auto w-full"}
            transition={{
                delay: 0.5,
                duration: 1.0
            }}
            variants={{
                visible: {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)"
                },
                hidden: {
                    opacity: 0,
                    transform: "translate3d(0, -10%, 0)"
                }
            }}
        >
            <div className={isMobile ? "w-full flex flex-col items-end font-extrabold text-2xl leading-snug px-8 text-right":
                "w-full flex flex-col items-end font-extrabold text-3xl leading-snug px-8 text-right"}>
                <p>
                    친구와 함께간
                </p>
                <p>
                    멋진 장소
                </p>
                <div className={"h-4"}/>
                <Image src={BeautifulPlace} height={isMobile? 200 : 300} width={isMobile? 200 : 300} alt={"bibbi_hi"}/>
            </div>
        </motion.div>


        <motion.div
            key={"sixth-slide-a"}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className={"max-w-screen-xl mx-auto w-full"}
            transition={{
                delay: 0.5,
                duration: 1.0
            }}
            variants={{
                visible: {
                    opacity: 1,
                    transform: "translate3d(0, 0, 0)"
                },
                hidden: {
                    opacity: 0,
                    transform: "translate3d(0, -10%, 0)"
                }
            }}
        >
            <div className={isMobile ? "w-full flex flex-col items-start font-extrabold text-2xl leading-snug py-16 px-8 text-right"
            :"w-full flex flex-col items-start font-extrabold text-3xl leading-snug py-16 px-8 text-right"}>
                <p>
                    편집샵에서
                </p>
                <p>
                    새로 산 모자
                </p>
                <div className={"h-4"}/>
                <Image src={NewHat} height={isMobile? 200 : 300} width={isMobile? 200 : 300} alt={"bibbi_hi"}/>
            </div>
        </motion.div>

    </div>)
}

function Las2tSlide({isMobile}: { isMobile: boolean }) {
    return (<div className={"items-start w-screen text-white bg-f5f378"}>
        <div className={"max-w-screen-xl mx-auto w-full"}>
            <div className={isMobile? "flex flex-col justify-between" : "flex flex-row justify-between"}>
                <div className={isMobile ? "font-extrabold text-3xl leading-snug text-black pt-16 px-8": "font-extrabold text-4xl leading-snug text-black pt-16 px-8"}>
                    <p>
                        더이상 친구들에게만
                    </p>
                    <p>
                        공유하지 마세요!
                    </p>
                </div>
                <div>
                    <div className={isMobile?"":"h-24"}/>
                    <Image style={{
                        width: isMobile ? "100%" : "36rem",
                    }} src={ShiningBibbi} alt={"bibbi_hi"}/>
                </div>

            </div>
        </div>
    </div>)
}


function LastSlide({isMobile}: { isMobile: boolean }) {
    return (
        <div className={"w-screen"} style={{
            background: "linear-gradient(to bottom, rgb(53 53 56 / 100%), rgb(53 53 56 / 50%)), url('/bibbi_matrix_light.svg')",
           // backgroundSize: "auto 100%",
            backgroundPosition: "cover",
            backgroundColor: "#353538",
            opacity: 0.8,
            zIndex: 0,
        }}
    >
            <div className={"max-w-screen-xl mx-auto w-full"}>
                <div className={isMobile ? "flex flex-col justify-between items-center text-white w-full  z-10":
                    "flex flex-row justify-center items-center w-full text-white z-10"}>
                    <div className={isMobile? "font-extrabold text-2xl text-center  pt-16 px-8" : "font-semibold text-4xl text-center  pt-16 px-8"}>
                        <p>
                            하루에 10초만 투자하고
                        </p>
                        <p className={"text-f5f378"}>
                            가족과 가까워지세요
                        </p>
                    </div>
                    <div className={"z-0"} >
                        <Image style={{
                            width: isMobile ? "100%" : "36rem",
                        }} src={BibbiPhoneSample} alt={"bibbi_hi"}/>
                    </div>
                </div>

            </div>
    </div>
    )
}


function TotoSlide({isMobile}: { isMobile: boolean }) {
    return (<div className={"flex flex-col justify-between items-center w-screen text-white py-16 px-8 bg-a39d gap-6"}
                 style={{
                     background: "url('/bibbi_repeatable_background.svg')",
                     backgroundSize: "auto 100%",
                     backgroundPosition: "center",
                 }}>
        <div className={"flex flex-col items-center justify-center gap-5"}>
            <Image src={BibbiCi} alt={"bibbi_ci"}/>
            <div className={isMobile ? "font-extrabold text-center text-2xl leading-snug text-black" : "font-extrabold text-center text-4xl leading-snug text-black"}>
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
                href="https://play.google.com/store/apps/details?id=com.no5ing.bbibbi&pli=1" title={"Go PlayStore"}>
                <Image height={isMobile ? 300 : 400} width={isMobile ? 150 : 200} src="/googleplay.png" alt={"playstore"}/>
            </Link>
            <Link href="https://apps.apple.com/kr/app/bibbi/id6475082088" title={"Go AppStore"}>
                <Image height={isMobile ? 300 : 400} width={isMobile ? 150 : 200} src="/appstore.png" alt={"appstore"}/>
            </Link>
        </div>

    </div>)
}

