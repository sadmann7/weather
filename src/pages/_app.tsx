import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

// external imports
import ToastWrapper from "@/components/ToastWrapper";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Weather</title>
      </Head>
      <Component {...pageProps} />
      <ToastWrapper />
    </QueryClientProvider>
  );
}
