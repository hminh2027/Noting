import React, { useEffect, useState } from "react";
import { NoteMainTemplate } from "../src/components/UI/template/Note/";

import LoginForm from "../src/components/UI/template/LoginForm";

import noteApi from "../src/api/apis/noteApi";
import NoteTaking from "../src/components/UI/template/NoteTaking";
import dynamic from "next/dynamic";
import Input from "../src/components/UI/atoms/LoginInput";
const NoteEditor = dynamic(() => import("../src/components/Editor"), {
  ssr: false,
});
const Test = () => {
  console.log(process.env.EXAMPLE_API_URL);
  const [apiResult, setApiResult] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await noteApi.get();
      setApiResult(res);
      console.log(res);
    };

    fetchApi();
  }, []);

  return (
    <Input/>
  );
};

export default Test;
