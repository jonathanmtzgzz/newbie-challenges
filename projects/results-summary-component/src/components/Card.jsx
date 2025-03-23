import React from "react";

export const Card = () => {
  return (
    <>
      <div className="my-10 w-72 rounded-3xl bg-white shadow-lg sm:mx-10 sm:grid sm:w-2xl sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-3 rounded-3xl bg-[#6141FC] py-12 text-white">
          <span className="text-gray-300">Your Result</span>
          <div className="flex h-28 w-28 flex-col items-center justify-center space-y-1 rounded-[50%] bg-[#452EE0] p-4">
            <span className="text-4xl font-bold">76</span>
            <span className="text-sm text-gray-400">of 100</span>
          </div>
          <strong className="text-xl">Great</strong>
          <p className="text-center text-sm text-gray-300">
            You scored higher than 65% of the <br /> people who have taken these tests
          </p>
        </div>
        <div className="flex flex-col space-y-4 p-6">
          <h2 className="text-xl font-bold">Summary</h2>
          <div className="flex justify-between rounded-lg bg-red-50 p-2">
            <span className="font-medium text-red-500">Reaction</span>
            <span>
              <strong>80</strong> / 100
            </span>
          </div>
          <div className="flex justify-between rounded-lg bg-yellow-50 p-2">
            <span className="font-medium text-yellow-500">Memory</span>
            <span>
              <strong>92</strong> / 100
            </span>
          </div>
          <div className="flex justify-between rounded-lg bg-green-50 p-2">
            <span className="font-medium text-green-500">Verbal</span>
            <span>
              <strong>61</strong> / 100
            </span>
          </div>
          <div className="flex justify-between rounded-lg bg-blue-50 p-2">
            <span className="font-medium text-blue-500">Visual</span>
            <span>
              <strong>73</strong> / 100
            </span>
          </div>
          <button className="w-full rounded-3xl bg-[#303B59] p-3 text-white">Continue</button>
        </div>
      </div>
    </>
  );
};
