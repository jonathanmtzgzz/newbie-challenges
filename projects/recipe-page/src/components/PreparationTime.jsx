import React from "react";

export const PreparationTime = () => {
  return (
    <section className="bg-rose-50 p-8 rounded-lg mt-8">
      <h2 className="text-xl text-rose-800 font-bold mb-2">Preparation time</h2>
      <ul className="list-disc list-inside text-sm marker:text-rose-800 space-y-2">
        <li>
          <strong>Total:</strong> Approximately 10 minutes
        </li>
        <li>
          <strong>Preparation:</strong> 5 minutes
        </li>
        <li>
          <strong>Cooking:</strong> 5 minutes
        </li>
      </ul>
    </section>
  );
};
