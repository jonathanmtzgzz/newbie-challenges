import React from "react";
import imgOmelette from "../assets/images/image-omelette.jpeg";

export const Description = () => {
  return (
    <div>
      <img
        className="h-[299px] w-[656px] rounded-2xl"
        src={imgOmelette}
        alt="Imagen de un Omelette"
      />
      <h1 className="text-4xl font-bold mt-8">Simple Omelette Recipe</h1>
      <p className="text-sm mt-4">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
    </div>
  );
};
