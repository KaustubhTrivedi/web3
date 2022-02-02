import React, { Fragment } from "react";
import Avatar from "../Components/Avatar";
import Image from "next/image";
import ChangeUsername from "../Components/ChangeUsername";
import EthLogo from "../Assets/EthLogo.png";
import { useMoralis } from "react-moralis";
const Header = () => {
  const { user } = useMoralis();
  return (
    <Fragment>
      <div className="text-left lg:text-center z-50 bg-black sticky top-0 shadow-sm border-b-2 border-pink-700">
        <div className="p-5 space-y-3 top-3">
          <div className=" relative  h-8 w-24 mx-auto hidden lg:inline-grid">
            {/* <Image src={EthLogo} layout="fill" /> */}
          </div>
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar />
            {/* Welcome */}
          </div>
          <div>
            <h1 className="text-3xl text-white">Welcome to the Chat Web3</h1>
            <h2 className="Text-5xl font-bold truncate text-white">
              {user.getUsername()}
            </h2>
          </div>
          {/* username */}
          {/* Change username */}
          <div className="absolute top-5 right-5">
            <ChangeUsername />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
