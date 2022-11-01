import React, { useEffect, useState } from "react";
import AvatarUserLogin from "../src/components/UI/atoms/LoginForm/AvatarUserLogin";
import ButtonLogin from "../src/components/UI/atoms/LoginForm/ButtonLogin";
import LoginInputGroup from "../src/components/UI/molecules/LoginInput/LoginInputGroup";



const Test = () => {


  return (
    <div>
      <AvatarUserLogin/>
       <LoginInputGroup/>
      <ButtonLogin/>
    </div>
   
  );
};

export default Test;
