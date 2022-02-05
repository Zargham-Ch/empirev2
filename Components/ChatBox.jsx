import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { BsFillRecordFill, BsFillTelephoneFill } from "react-icons/bs";
import MessageItem from "./MessageItem";
const person = "./assets/person.png";
import { BiPaperPlane, IconName } from "react-icons/bi";

const ChatBox = (props) => {
  return (
    <div className="ChatBoxWrapper">
      <div className="header">
        <div className="chatSide">
          <div className="leftSide">
            <img src={person} className="img-fluid" />
          </div>
          <div className="rightSide">
            <h6 className="heading">Florencio Dorrance</h6>
            <span className="online">
              <BsFillRecordFill />
              online
            </span>
          </div>
        </div>
        <div className="callSide">
          <BsFillTelephoneFill />
          Call
        </div>
      </div>
      <div className="chatMessageWrapper">
        <MessageItem personImage={person} Message="Florencio Dorrance" />
        <MessageItem personImage={person} Message="Florencio Dorrance" send />
        <MessageItem personImage={person} Message="Florencio Dorrance" />
        <MessageItem personImage={person} Message="Florencio Dorrance" send />
        <MessageItem personImage={person} Message="Florencio Dorrance" />
        <MessageItem personImage={person} Message="Florencio Dorrance" send />
        <MessageItem personImage={person} Message="Florencio Dorrance" />
        <MessageItem personImage={person} Message="Florencio Dorrance" send />
      </div>
      <div className="MessageTypeInput">
        <div className="clipArea">
          <AiOutlinePaperClip className="clip" />
        </div>
        <div className="inputWrapper">
          <input type="text" className="textInput" />
          <BiPaperPlane className="Plane" />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
