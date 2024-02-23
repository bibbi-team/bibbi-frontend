import Head from "next/head";

export default function PageTitle({title}: {title: string}) {
  return (
    <>
        <Head>
            <title>{title} | 삐삐</title>
        </Head>
    </>
  );
}
