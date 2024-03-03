
import React from "react";
import Terms from "@/app/(website)/terms/terms";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: '삐삐 이용약관 | 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function TermsPage() {
  return <>
    <Terms/>
  </>
}
