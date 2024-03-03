
import React from "react";
import Privacy from "@/app/(website)/privacy/privacy";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: '삐삐 개인정보 처리방침 | 삐삐',
  description: '가족 일상공유 어플리케이션',
}

export default function TermsPage() {
  return <>
    <Privacy/>
  </>
}
