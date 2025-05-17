import type { AppProps } from "next/app";
import MainLayout from "@/shared/layouts/MainLayout";
import "@/shared/styles/globals.scss";

export default function AppPage({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
