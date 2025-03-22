import React from "react";

export const Nutrition = () => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-red-900 mb-4">Nutrition</h2>
      <p className="text-sm pb-4">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <table className="table-auto w-full text-sm">
        <tbody>
          <tr className="border-b-1 border-rose-100">
            <td className="px-4 py-2">Calories</td>
            <td className="px-4 py-2 font-bold text-red-900">277kcal</td>
          </tr>
          <tr className="border-b-1 border-rose-100">
            <td className="px-4 py-2">Carbs</td>
            <td className="px-4 py-2 font-bold text-red-900">0g</td>
          </tr>
          <tr className="border-b-1 border-rose-100">
            <td className="px-4 py-2">Protein</td>
            <td className="px-4 py-2 font-bold text-red-900">20g</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Fat</td>
            <td className="px-4 py-2 font-bold text-red-900">22g</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
