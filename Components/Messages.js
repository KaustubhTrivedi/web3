import SendMessage from "../Components/SendMessage";
import Message from "./Message";
import React, { Fragment, useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
const MINS_DURATION = 15;
const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  const { data, isLoading, error } = useMoralisQuery("Messages", (query) =>
    query.ascending("createdAt")
  );
  console.log(data);

  return (
    <Fragment>
      <div className="pb-56">
        <div className="my-5 text-white text-left lg:text-center">
          <ByMoralis
            style={{ marginLeft: "auto", marginRight: "auto" }}
            variant="dark"
          />
          <div className="space-y-10 p-4">
            {data.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
          <div className="text-center">
            <SendMessage endOfMessagesRef={endOfMessagesRef} />
          </div>
          <div ref={endOfMessagesRef} className="text-center text-gray-400">
            <p>You are up-to date {user.getUsername()}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Messages;
