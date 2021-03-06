import Head from "next/head";
import Login from "../Components/Login";
import Header from "../Components/Header";
import Messages from "../Components/Messages";
import { useMoralis } from "react-moralis";
import { useState } from "react";
// import EthLogo from '../Assets/EthLogo.ico'
export default function Home() {
  const { isAuthenticated } = useMoralis();
  
  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen overflow-y-scroll mx-auto bg-gradient-to-b from-black to-purple-500 overflow-hidden">
      <Head>
        <title>Web3 Challenge Chat Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        {/* header */}
        <Header />
        <Messages />

        {/* messages */}
      </div>
    </div>
  );
}
