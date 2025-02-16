"use client"
import React from "react";
import NavigationBar from "@/components/layout/NavigationBar";
import {privacy} from "@/components/strings";
import {useViewPortDetector} from "@/components/WindowDimensions";

export default function CSAE() {
    const isMobile = useViewPortDetector();
    return <>
        <header className={"fixed z-40 top-0"}>
            <NavigationBar isFull={true}/>
        </header>
        <div className={"w-full flex flex-col justify-center items-center pt-24 pb-8"}>
                <div className={isMobile ? "w-full px-8" : "max-w-screen-xl mx-auto w-full"}>
                    <div style={{padding: '1rem', lineHeight: '1.6', fontFamily: 'Arial, sans-serif'}}>
                        <h1>삐삐 CSAE(아동 성 학대 및 착취) 엄격 금지 정책</h1>

                        <section>
                            <h2>1. 정책 목적</h2>
                            <p>
                                본 정책은 [앱 서비스명]에서 아동 성 학대 및 착취(CSAE)와 관련된 모든 형태의 콘텐츠, 행위, 기능을 엄격히 금지하고,
                                아동의 안전과 인권 보호를 최우선으로 하는 서비스 환경을 유지하기 위해 제정되었습니다.
                            </p>
                        </section>

                        <section>
                            <h2>2. CSAE의 정의</h2>
                            <ul>
                                <li>
                                    <strong>아동:</strong> 국내외 관련 법률에 따라 만 18세 미만의 개인을 의미합니다.
                                </li>
                                <li>
                                    <strong>아동 성 학대 및 착취(CSAE):</strong> 아동을 대상으로 한 모든 성적 학대, 성적 착취, 성적 대상화, 부적절한 성적 노출
                                    및 아동의 인권과 안전을 침해하는 행위를 포함합니다.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>3. 엄격 금지 조항</h2>
                            <p>[앱 서비스명]에서는 다음과 같은 행위와 콘텐츠를 절대 허용하지 않습니다:</p>
                            <ul>
                                <li>
                                    <strong>성적 콘텐츠:</strong> 아동을 대상으로 한 어떠한 성적 이미지, 영상, 텍스트, 음성 등 모든 성적 콘텐츠.
                                </li>
                                <li>
                                    <strong>성적 착취 및 학대:</strong> 아동에 대한 성적 착취, 학대, 부적절한 성적 행동을 조장하거나 묘사하는 모든 콘텐츠.
                                </li>
                                <li>
                                    <strong>성적 대상화:</strong> 아동을 성적 대상으로 삼거나 성적 목적을 위해 이용하는 모든 행위 및 콘텐츠.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. 사용자 및 개발자의 책임</h2>
                            <ul>
                                <li>
                                    <strong>법률 및 정책 준수:</strong> 모든 사용자 및 콘텐츠 제공자는 국내외 아동 보호 관련 법률, [앱 서비스명]의 내부 정책, 및
                                    관련 국제 규정을 준수해야 합니다.
                                </li>
                                <li>
                                    <strong>콘텐츠 관리:</strong> 사용자와 개발자는 앱 내 및 관련 플랫폼에 게시되는 모든 콘텐츠가 CSAE 관련 요소를 포함하지 않도록
                                    주의하며, 정기적인 검토 및 자율 점검을 실시해야 합니다.
                                </li>
                                <li>
                                    <strong>즉각적 신고:</strong> CSAE 관련 의심 콘텐츠나 행위를 발견한 경우, 즉시 [앱 서비스명] 내 신고 기능 또는 고객 지원
                                    채널을 통해 보고해 주시기 바랍니다.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>5. 신고 절차 및 후속 조치</h2>
                            <h3>신고 방법:</h3>
                            <ul>
                                <li>
                                    앱 내 신고 기능을 통해 CSAE 관련 의심 콘텐츠 및 행위를 신고할 수 있습니다.
                                </li>
                                <li>
                                    신고 시 가능한 한 상세한 정보와 증거 자료를 제공해 주시기 바랍니다.
                                </li>
                            </ul>
                            <h3>조사 및 대응:</h3>
                            <ul>
                                <li>
                                    접수된 신고는 신속하고 철저하게 조사됩니다.
                                </li>
                                <li>
                                    조사 결과 CSAE 관련 위반 사항이 확인될 경우, 해당 콘텐츠는 즉시 삭제되며, 관련 사용자 또는 개발자는 서비스 이용 제한, 계정 정지 등 적절한
                                    제재를 받게 됩니다.
                                </li>
                            </ul>
                            <h3>법적 대응:</h3>
                            <ul>
                                <li>
                                    심각한 법률 위반이 확인되는 경우, 관계 당국에 즉시 통보하여 법적 절차를 진행할 수 있습니다.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2>6. 정책 변경 및 고지</h2>
                            <p>
                                본 정책은 국내외 법률 변경, 내부 기준 개선 또는 [앱 서비스명] 정책 업데이트에 따라 변경될 수 있습니다.
                            </p>
                            <p>
                                모든 변경 사항은 사전에 공지되며, 최신 정책은 [앱 서비스명] 공식 웹사이트 및 앱 내 공지사항에 게시됩니다.
                            </p>
                        </section>

                        <section>
                            <h2>7. 문의 및 지원</h2>
                            <p>
                                본 정책과 관련하여 추가 문의나 신고 사항이 있으신 경우, 아래의 연락처로 문의해 주시기 바랍니다.
                            </p>
                            <ul>
                                <li>
                                    <strong>연락처:</strong> 55ing.team@gmail.com
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
        </div>
    </>
}
