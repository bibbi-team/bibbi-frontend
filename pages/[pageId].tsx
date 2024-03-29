import * as React from 'react'

import 'react-notion-x/src/styles.css';
import { ExtendedRecordMap } from 'notion-types'
import {NotionAPI} from "notion-client";
import NotionPage from "@/components/NotionPage";
import {GetStaticPropsContext} from "next";
import Head from "next/head";
import BBiBBiHead from "@/components/BBiBBiHead";


const rootNotionPageId = 'Bibbi-c3dd457b32564f369c1a08c42c0ab00e';
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
    const notion = new NotionAPI();
    const pageId = (params?.pageId as string) || rootNotionPageId
    try {
        const recordMap = await notion.getPage(pageId)
        return {
            props: {
                recordMap
            },
            revalidate: 10
        }
    }catch(e) {
        return {
            notFound: true,
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
    return <>
        <BBiBBiHead title={"삐삐 - 소개 페이지"} description={"삐삐 소개 페이지"} />
        <NotionPage recordMap={recordMap} />
    </>
}
