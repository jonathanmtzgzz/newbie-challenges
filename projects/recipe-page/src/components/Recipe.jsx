import React from "react";
import { PreparationTime } from "./PreparationTime";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { Nutrition } from "./Nutrition";
import { Description } from "./Description";

export const Recipe = () => {
  return (
    <div className="container mx-auto bg-white p-10 w-[736px] rounded-2xl">
      <Description />
      <PreparationTime />
      <Ingredients />
      <Instructions />
      <Nutrition />
    </div>
  );
};
