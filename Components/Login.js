import Image from "next/image";
import { useMoralis } from "react-moralis";
import EthLogo from "../Assets/EthLogo.png";
// import { Button } from "@mui/material";
const Login = () => {
  const {authenticate} = useMoralis();
  
  return (
    <>
      <div className="bg-black relative text-white h-screen">
        <div className="flex flex-col z-50 absolute h-4/6 w-full items-center justify-center space-y-8">
          <Image
            className="drop-shadow rounded-lg"
            alt="Ethereum Logo"
            src={EthLogo}
            height={150}
            width={100}
          />
          <button onClick={authenticate} className="text-black bg-yellow-500 rounded-lg p-5 animate-pulse">
            Login to Web3
          </button>
        </div>
        <div className=" flex items-center">
          <Image
            src="https://links.papareact.com/55n"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
