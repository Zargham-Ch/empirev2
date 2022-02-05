import React from "react";
import InputWithLabel from "./InputWithLabel";
import { Input, Label } from "reactstrap";
import FormFooter from "./FormFooter";

const FormPage = () => {
  return (
    <div className="GamingZonePlay formPageWrapper">
      <div className="container">
        <div className="formContainer">
          <h1 className="headingMain">
            <span>Register</span>
          </h1>
          <p className="dec mt-3">
            For the purpose of industry regulation, your details are required.
          </p>
          <InputWithLabel
            label="Your fullname*"
            placeholder="Invictus Innocent"
            type="text"
          />
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
          <InputWithLabel
            label="Confirm password*"
            placeholder="Confirm your password"
            type="password"
          />
          <Input type="checkbox" />
          <Label check className="checkbox-label">
            I agree to terms & conditions
          </Label>
          <FormFooter
            btnText="Register Account"
            rightText="Already have an account?"
          />
        </div>
      </div>
    </div>
  );
};

export default FormPage;
