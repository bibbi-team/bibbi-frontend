import type { Metadata } from 'next'
import '../globals.css'
import "../layout.css"
import {ArticleJsonLd} from "next-seo";
import React from "react";
export const metadata: Metadata = {
  title: '삐삐',
  description: '가족 일상공유 어플리케이션',
  openGraph: {
    title: '삐삐 - 가족 초대 링크가 도착했어요',
    description: '입장하고 일상공유를 시작해보세요',
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
          title="삐삐 - 가족 초대 링크가 도착했어요"
          authorName={"bbibbi"}
          datePublished={
            "2023-01-01T00:00:00+09:00"
          }
          description={"입장하고 일상공유를 시작해보세요"}
          images={
            [
              "https://bibbi.app/og_image.png"
            ]
          }
        />
      </head>

      <body suppressHydrationWarning={true}>
          {children}
      </body>
    </html>
  )
}
