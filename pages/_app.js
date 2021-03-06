import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APPLICATION_ID}
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      >
        <Component {...pageProps} />;
      </MoralisProvider>
    </React.StrictMode>
  );
}

export default MyApp;
