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
        <ChakraFactory.title>InterfaceX 3.0</ChakraFactory.title>
        <meta
          name="description"
          content="InterfaceX 3.0. Our strength is that we have a system that can provide all the technical support as Web5, not only with the latest Web3 technology, but also with Web2.0 technology, which is a solid foundation. We can also provide support in designing the token economy, DAOs, and other systems at the philosophical level. "
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
