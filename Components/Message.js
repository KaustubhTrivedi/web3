import React, { Fragment } from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
const Message = ({ message }) => {
  const { user } = useMoralis();
  const isOwnMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <Fragment>
      <div
        className={`flex items-end space-x-2 relative ${
          isOwnMessage && "justify-end"
        }`}
      >
        <div
          className={`relative h-8 w-8 ${isOwnMessage && "order-last ml-2"}`}
        >
          <Avatar username={message.get("username")} />
        </div>
        <div
          className={`flex space-x-4 p-3 rounded-lg${
            isOwnMessage
              ? " rounded-br-lg text-black bg-pink-300"
              : "rounded-bl-lg text-black bg-blue-400"
          }`}
        >
          {/* Test */}
          <p>{message.get("message")}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Message;
