import classNames from "classnames";
import React from "react";

const MessageItem = (props) => {
  return (
    <div
      className={classNames("personBox messageChat", {
        active: props.active,
        send: props.send,
      })}
    >
      <div className="LeftText">
        <img src={props.personImage} className="img-fluid" />
      </div>
      <div className="textSpaceWrapper">
        <span className="textSpace">{props.Message}</span>
      </div>
    </div>
  );
};

export default MessageItem;
