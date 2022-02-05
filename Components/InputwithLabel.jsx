import React from "react";

const InputWithLabel = (props) => {
  return (
    <div className="inputWrapper">
      <span className="label">{props.label}</span>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="inputArea"
      />
    </div>
  );
};

export default InputWithLabel;
