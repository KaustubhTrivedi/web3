import React, { Fragment } from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
const Avatar = (username, logoutOnPress) => {
  const { user, logout } = useMoralis();

  return (
    <Fragment>
      <div>
        <Image
          className="rounded-full bg-black cursor-pointer hover:opacity-75"
          src={`https://avatars.dicebear.com/api/pixel-art/${
            username || user.getUsername()
          }.svg`}
          layout="fill"
          onClick={() => logoutOnPress && logout()}
        />
      </div>
    </Fragment>
  );
};

export default Avatar;
