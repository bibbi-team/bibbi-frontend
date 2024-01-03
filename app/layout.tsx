import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {ArticleJsonLd, DefaultSeo} from "next-seo";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'No5Ing',
  description: 'Don\'t 5ing on development',
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
          url="https://no5ing.kr"
          title="삐삐 - 가족 초대 링크가 도착했어요"
          authorName={"bbibbi"}
          datePublished={
            "2023-01-01T00:00:00+09:00"
          }
          description={"입장하고 일상공유를 시작해보세요"}
          images={
            [
              "https://no5ing.kr/og_image.png"
            ]
          }
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
