import myAvatar from "../assets/images/myAvatar.jpg";
import React from "react";

export const UserDescription = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-20 h-20 rounded-full justify-center mb-3"
        src={myAvatar}
        alt="avatar"
      />
      <h1 className="text-xl text-white font-bold mb-1">Jonathan González</h1>
      <h2 className="text-base text-[#C4F82A] font-bold mb-4">
        Monterrey N.L., México
      </h2>
      <p className="text-white text-center mb-4 text-base">
        I love working with <strong className="text-blue-500">React JS </strong>
        and <strong className="text-sky-400">Tailwind CSS</strong>
      </p>
    </div>
  );
};
