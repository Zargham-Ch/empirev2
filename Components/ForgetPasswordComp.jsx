import React from "react";
import InputWithLabel from "./InputWithLabel";
import { Input, Label } from "reactstrap";
import FormFooter from "./FormFooter";

const ForgetPasswordComp = () => {
  return (
    <div className="GamingZonePlay formPageWrapper">
      <div className="container">
        <div className="formContainer">
          <h1 className="headingMain">
            <span>Forgot password</span>
          </h1>
          <p className="head-dec mt-3">Enter Your Email</p>
          <InputWithLabel
            label="Enter address*"
            placeholder="Enter email address"
            type="email"
          />
          <FormFooter btnText="Continue" />
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordComp;
