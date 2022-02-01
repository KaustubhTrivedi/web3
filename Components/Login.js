import Head from "next/head";
import { Fragment } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import EthLogo from "../Assets/EthLogo.png";
const Login = () => {
  const { authenticate } = useMoralis();

  return (
    <Fragment>
      <div className="bg-[url('https://links.papareact.com/55n')] relative text-white h-screen">
        <Head>
          <title>Web3 Challenge Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-col absolute h-4/6 w-full items-center justify-center space-y-8 z-50">
          <Image
            className="drop-shadow rounded-lg z-auto"
            alt="Ethereum Logo"
            src={EthLogo}
            height={150}
            width={100}
          />
          <button
            onClick={authenticate}
            className="text-black bg-yellow-500 rounded-lg p-5 animate-pulse"
          >
            Login to Web3
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
