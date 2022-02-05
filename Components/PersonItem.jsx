import classNames from "classnames";
import React from "react";

const PersonItem = (props) => {
  return (
    <div className={classNames("personBox", { active: props.active })}>
      <div className="leftSide">
        <img src={props.personImage} className="img-fluid" />
      </div>
      <div className="RightSide">
        <h6 className="heading">{props.Name}</h6>
        <span className="text">{props.text}</span>
        {props.disText && <span className="labelDis">{props.disText}</span>}
        {props.question && (
          <span className="labelQuestion">{props.question}</span>
        )}
        {props.wanted && <span className="labelWanted">{props.wanted}</span>}
        <span className="hour">{props.hours}</span>
      </div>
    </div>
  );
};

export default PersonItem;
