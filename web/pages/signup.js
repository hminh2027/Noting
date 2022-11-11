import React from "react";

import { EmptyLayout } from "../src/components/layout/EmptyLayout";
import { SignupForm } from "../src/components/UI/molecules/SignupForm";
const SignUp = ({}) => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};
SignUp.layout = EmptyLayout;
export default SignUp;
