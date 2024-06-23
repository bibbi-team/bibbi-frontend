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
    title: '삐삐 - 가족 초대 링크가 도착했어요',
    description: '간단한 일상공유로 가족과 가까워지세요',
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
        <link rel="preload" as="font" href="https://cdn.jsdelivr.net" />
        <ArticleJsonLd
            useAppDir={true}
            url="https://bibbi.app"
            title="삐삐 - 가족 초대 링크가 도착했어요"
            authorName={"bbibbi"}
            datePublished={
              "2023-01-01T00:00:00+09:00"
            }
            description={"간단한 일상공유로 가족과 가까워지세요"}
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
