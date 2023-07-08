import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { ReactNode } from "react";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { staticPath } from "@/lib/$path";
import CTAStickyContainer from "./CTAStickyContainer";
import { chakra as ChakraFactory } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Head>
        <ChakraFactory.title>InterfaceX</ChakraFactory.title>
        <meta
          name="description"
          content="「いい感じのWEB」をお手頃価格本格的なクオリティで新提案。開発案件なら業界トップレベルのエンジニアが多数在籍する私たちにお任せください。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={staticPath.favicon_ico} />
      </Head>
      <Header />
      <main className={`${styles.main}`}>{children}</main>
      <Footer />
      <CTAStickyContainer />
    </>
  );
}
