import 'react-notion-x/src/styles.css';
import { ExtendedRecordMap } from "notion-types";
import {NotionAPI} from "notion-client";
import NotionPage from "@/components/NotionPage";


export default function MainPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
    if(!recordMap) return <></>
    return <>
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
