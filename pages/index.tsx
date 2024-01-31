import 'react-notion-x/src/styles.css';
import { ExtendedRecordMap } from "notion-types";
import {NotionAPI} from "notion-client";
import NotionPage from "@/components/NotionPage";
import {Metadata} from "next";
import Head from "next/head";

export default function MainPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
    if(!recordMap) return <></>
    return <>
        <Head>
            <title>삐삐 - 소개 페이지</title>
            <meta name="description" content="삐삐 소개 페이지" />
        </Head>
        <NotionPage recordMap={recordMap} />
    </>
}

export const getStaticProps = async () => {
    const notion = new NotionAPI();
    const recordMap = await notion.getPage('Bibbi-c3dd457b32564f369c1a08c42c0ab00e');

    return {
        props: {
            recordMap
        },
        revalidate: 10
    }
}
