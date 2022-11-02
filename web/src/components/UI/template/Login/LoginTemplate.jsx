import React, { useEffect, useState } from "react";
import AvatarUserLogin from "../../atoms/LoginForm/AvatarUserLogin";
import ButtonLogin from "../../atoms/LoginForm/ButtonLogin";
import LoginInputGroup from "../../molecules/LoginInput/LoginInputGroup";


const LoginTemplate = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full p-6">
      <div>
        <img className="pl-20 pt-10 h-4/5 object-cover" src="https://cdn2.iconfinder.com/data/icons/work-from-home-malibu-vol-1/128/Note_Taking_App-512.png" alt="" />
      </div>

      <div className="flex flex-col justify-center pb-20 pr-20 mr-20">
         <form className="max-w-[500px] w-full mx-auto px-8 ">
            <AvatarUserLogin></AvatarUserLogin>
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
