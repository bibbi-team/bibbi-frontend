import Head from "next/head";

export default function BBiBBiHead({title, description}: {title: string, description: string}) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="og:title" content="삐삐 - 가족 일상 위젯" />
            <meta name="og:url" content="https://no5ing.kr/" />
            <meta name="og:description" content="하루 한 번 가족에게 보내는 생존신고 위젯, 삐삐" />
            <meta name="og:image" content="https://no5ing.kr/og_image.png" />
            <meta name="og:image:width" content="800" />
            <meta name="og:image:height" content="400" />
            <meta name="naver-site-verification" content="c99d6c53bd2b8fdf2c87f1f62b080b068f1aab65" />
        </Head>
    </>
  );
}
