import React, { useEffect, useState } from "react";
import { categoryApi } from "../src/api/apis";
import axiosClient from "../src/api/axiosClient";
import { EmptyLayout } from "../src/components/layout/EmptyLayout";
import { CommentRow } from "../src/components/UI/molecules/NoteComment";
import { SignupForm } from "../src/components/UI/molecules/SignupForm";
import { restoreSnapshot } from "../src/service/snapshot";
const Test = ({}) => {
  restoreSnapshot();
  return <div></div>;
};
Test.layout = EmptyLayout;
export default Test;
