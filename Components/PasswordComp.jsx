import React from "react";
import InputWithLabel from "./InputWithLabel";
import { Input, Label } from "reactstrap";
import FormFooter from "./FormFooter";

const PasswordComp = () => {
  return (
    <div className="GamingZonePlay formPageWrapper">
      <div className="container">
        <div className="formContainer">
          <h1 className="headingMain">
            <span>New Password</span>
          </h1>
          <p className="head-dec mt-3">Create New Password.</p>
          <InputWithLabel
            label="Create password*"
            placeholder="password"
            type="password"
          />
          <InputWithLabel
            label="Confirm password*"
            placeholder="Confirm your password"
            type="password"
          />
          <FormFooter btnText="Change" />
        </div>
      </div>
    </div>
  );
};

export default PasswordComp;
