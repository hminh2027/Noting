import React, { useEffect, useState } from "react";
import AvatarUserLogin from "../../atoms/LoginForm/AvatarUserLogin";
import ButtonLogin from "../../atoms/LoginForm/ButtonLogin";
import LoginInputGroup from "../../molecules/LoginInput/LoginInputGroup";


const LoginTemplate = () => {
  return (
    <div className=" flex justify-center">
      <div className=" flex flex-col justify-center border border-gray-300 w-[500px] ">
         <form className="max-w-[500px] w-full mx-auto pt-20 p-10">
            <AvatarUserLogin className="mb-10"></AvatarUserLogin>
            <LoginInputGroup 
              className="pt-6"
              />
            <ButtonLogin/>
         </form>
      </div>
    </div>
  );
};

export default LoginTemplate;
