import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
// import EthLogo from '../Assets/EthLogo.ico'
export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="flex space-y-5 h-screen w-screen items-center justify-center">
      <Head>
        <title>Web3 Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div  style={{ fontFamily: "monospace", fontSize: "80px" }}>
        <h1 className="font-black">Welcome to the Web3 Chat!!!</h1>
      </div>
      <div>
        <button onClick={logout}>Logout of Web3</button>
      </div>
    </div>
  );
}
