import React from "react";

const Loading = () => {
  return (
    <div role="status" className="animate-pulse pt-10">
      <div className="flex justify-between">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[500px] mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
      </div>
      <div className="flex justify-between">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[500px] mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
      </div>
      <div className="flex justify-between">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[500px] mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
      </div>
      <div className="flex justify-between">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[500px] mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
      </div>
      <div className="flex justify-between">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[500px] mb-4"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-4"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
