import React from "react";

const FormFooter = (props) => {
  return (
    <div className="formFooter">
      <span className="actionFormBtn">{props.btnText}</span>
      <div className="footerRoute">
        <span className="alreadyAction tl">{props.leftText}</span>
        <span className="alreadyAction tr">{props.rightText}</span>
      </div>
    </div>
  );
};

export default FormFooter;
