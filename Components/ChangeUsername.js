import { Button } from "@mui/material";
import React, { Fragment, useState, useRef } from "react";
import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis();
  const setUsername = () => {
    const username = prompt(`Enter your new username: ${user.getUsername()}`);
    setUserData({ username });
  };

  return (
    <Fragment>
      <div>
        <Button disabled={isUserUpdating} onClick={setUsername}>
          Change Username
        </Button>
      </div>
    </Fragment>
  );
};
export default ChangeUsername;