import React, { useEffect, useState } from "react";

import LoginForm from "../src/components/UI/template/LoginForm";

import noteApi from "../src/api/apis/noteApi";
import NoteTaking from "../src/components/UI/template/NoteTaking";
import dynamic from "next/dynamic";
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

  return <NoteEditor data={apiResult}></NoteEditor>;
};

export default Test;
