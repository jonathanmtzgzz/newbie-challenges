import React from "react";

export const Ingredients = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl text-red-900 font-bold mb-4">Ingredients</h2>
      <ul className="list-disc list-inside text-sm marker:text-rose-800 space-y-2">
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>
          Optional fillings: cheese, diced vegetables, cooked meats, herbs
        </li>
      </ul>
      <hr className="mt-6 border-rose-100" />
    </section>
  );
};
