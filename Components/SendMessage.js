import React, { Fragment, useState } from "react";
import { Button } from "@mui/material";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (event) => {
    event.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        user: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {
          //object was saved successfully
          console.log(`Message saved successfully${message}`);
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <Fragment>
      <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 max-w-2xl rounded-full px-5 mx-3 shadow-xl border-4 border-blue-400 lg:mx-96">
        <input
          className="flex-grow  outline-none bg-transparent text-white placeholder-gray-500 pr-5"
          placeholder={`Enter a message ${user.getUsername()}`}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          type="text"
        ></input>
        <Button type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </Fragment>
  );
};

export default SendMessage;
