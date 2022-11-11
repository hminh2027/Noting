import React, { useEffect, useState } from "react";
import { categoryApi } from "../src/api/apis";
import axiosClient from "../src/api/axiosClient";
import { EmptyLayout } from "../src/components/layout/EmptyLayout";
import { SignupForm } from "../src/components/UI/molecules/SignupForm";
const Test = ({}) => {
  return (
    <div>
      <SignupForm />
    </div>
  );
};
Test.layout = EmptyLayout;
export default Test;
