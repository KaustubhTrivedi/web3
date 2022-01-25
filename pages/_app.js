import "../styles/globals.css";
import { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";
import React from "react";

function MyApp({ Component, pageProps }, AppProps) {
  const appID = process.env.NEXT_PUBLIC_APPLICATION_ID;
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
  return (
    <React.StrictMode>
      <MoralisProvider appId="tKeKHx9eETsUk3ZdfeR2vwGsBExfcvlEzD2OT3Bh" serverUrl="https://asvagetwbam0.usemoralis.com:2053/server">
        <Component {...pageProps} />;
      </MoralisProvider>
    </React.StrictMode>
  );
}

export default MyApp;
