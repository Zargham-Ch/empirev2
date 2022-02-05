import React from "react";
import {
  AiOutlineDown,
  AiOutlineMore,
  AiOutlinePlus,
  AiOutlineSearch,
} from "react-icons/ai";
import ChatBox from "./ChatBox";
import PersonItem from "./PersonItem";
const person = "./assets/person.png";

const ChatRoomArea = () => {
  return (
    <div className="GamingZonePlay pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3 col-lg-3 px-0">
            <div className="messagesWrapper">
              <div className="headerMessages">
                <div className="items">
                  <span className="head">
                    Messages <AiOutlineDown />
                  </span>
                  <span className="messageCount">12</span>
                  <span className="plus">
                    <AiOutlinePlus />
                  </span>
                </div>
              </div>
              <div className="searchWrapper">
                <input type="text" placeholder="Search Message" />
                <AiOutlineSearch />
              </div>
              <PersonItem
                personImage={person}
                active
                Name="Florencio Dorrance"
                text="woohoooo"
                disText="Some content"
                hours="24m"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="woohoooo"
                hours="24m"
                question="Question"
                wanted="Help wanted"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="woohoooo"
                hours="24m"
                disText="Some content"
                wanted="Help wanted"
              />
              <PersonItem
                personImage={person}
                active
                Name="Florencio Dorrance"
                text="woohoooo"
                disText="Some content"
                hours="24m"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="woohoooo"
                hours="24m"
                question="Question"
                wanted="Help wanted"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 px-0">
            <ChatBox />
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 px-0">
            <div className="directory">
              <div className="headerMessages">
                <div className="items">
                  <span className="head">Directory</span>
                  <span className="plus">
                    <AiOutlineMore />
                  </span>
                </div>
              </div>
              <h6 className="labelTeam">
                Team Members <span className="bubble">12</span>
              </h6>
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="Market Development Manager"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="Market Development Manager"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="Market Development Manager"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="Market Development Manager"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="Market Development Manager"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="Market Development Manager"
              />
              <PersonItem
                personImage={person}
                Name="Florencio Dorrance"
                text="Market Development Manager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomArea;
