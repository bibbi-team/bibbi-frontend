import React from "react";
import "../layout.css";
import {Metadata} from "next";
import Main from "@/app/(website)/main";

export const metadata: Metadata = {
  title: '삐삐 소개 페이지 | 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function MainPage() {
  return <>
    <Main/>
  </>
}
