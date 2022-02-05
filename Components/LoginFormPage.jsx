import React from "react";
import InputWithLabel from "./InputWithLabel";
import { Input, Label } from "reactstrap";
import FormFooter from "./FormFooter";

const LoginFormPage = () => {
  return (
    <div className="GamingZonePlay formPageWrapper">
      <div className="container">
        <div className="formContainer">
          <h1 className="headingMain">
            <span>Login</span>
          </h1>
          <p className="head-dec mt-3">Welcome Back</p>
          <InputWithLabel
            label="Email address*"
            placeholder="Enter email address"
            type="email"
          />
          <InputWithLabel
            label="Create password*"
            placeholder="password"
            type="password"
          />
          <FormFooter
            btnText="Login"
            leftText="Forgot password"
            rightText="Already have an account?"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginFormPage;
