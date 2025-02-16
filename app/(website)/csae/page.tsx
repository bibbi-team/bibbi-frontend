
import React from "react";
import {Metadata} from "next";
import CSAE from "@/app/(website)/csae/privacy";

export const metadata: Metadata = {
  title: '삐삐 CSAE 정책 | 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function CsaePage() {
  return <>
    <CSAE/>
  </>
}
