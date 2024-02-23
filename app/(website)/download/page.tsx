
import React from "react";
import Download from "@/app/(website)/download/download";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: '삐삐 다운로드 | 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function DownloadPage() {
  return <>
    <Download/>
  </>
}
