import {Code, Collection, Equation} from "@/components/notion_dynamic";
import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import Link from "next/link";
import Image from "next/image";

export default function NotionPage({ recordMap }: { recordMap: ExtendedRecordMap }) {
    return <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        components={{
            nextImage: Image,
            nextLink: Link,
            Code,
            Collection,
            Equation,
        }}
    />
}
