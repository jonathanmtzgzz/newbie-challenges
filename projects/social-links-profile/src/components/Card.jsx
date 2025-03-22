import React from "react";
import { UserDescription } from "./UserDescription";
import { SocialLinks } from "./SocialLinks";

export const Card = () => {
  return (
    <div className="w-80 bg-[#1F1F1F] inline-block mx-auto p-8 rounded-2xl">
      <UserDescription />
      <SocialLinks />
    </div>
  );
};
