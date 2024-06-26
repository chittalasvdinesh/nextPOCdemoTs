import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps:{session,...pageProps} }: AppProps) {


  return <>
      <SessionProvider session={session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
      </SessionProvider>
  </>
}
