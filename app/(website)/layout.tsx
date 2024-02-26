import type { Metadata } from 'next'
import "./layout.css"
import {ArticleJsonLd} from "next-seo";
import React from "react";
import FooterBar from "@/components/layout/FooterBar";
import GoogleAnalytics from "@/components/GoogleAnalytics";
export const metadata: Metadata = {
  title: '삐삐',
  description: '가족 일상공유 어플리케이션',
  openGraph: {
    title: '삐삐 - 공식 홈페이지',
    description: '하루 한 번, 가족에게 보내는 생존신고',
    url: 'https://bibbi.app',
    siteName: 'BbiBbi',
    images: [
      {
        url: 'https://bibbi.app/og_image.png',
        width: 800,
        height: 400,
      }
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="kr">
      <head>
        <ArticleJsonLd
          useAppDir={true}
          url="https://bibbi.app"
          title="삐삐 - 공식 홈페이지"
          authorName={"bbibbi"}
          datePublished={
            "2023-01-01T00:00:00+09:00"
          }
          description={"하루 한 번, 가족에게 보내는 생존신고"}
          images={
            [
              "https://bibbi.app/og_image.png"
            ]
          }
        />
        <GoogleAnalytics/>
      </head>

      <body suppressHydrationWarning={true} style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflowX: "hidden",
      }}>
        <main className={"grow h-full"}>
          {children}
        </main>
        <footer>
          <FooterBar/>
        </footer>
      </body>
    </html>
  )
}
