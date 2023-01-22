import React from "react";

const Loading = () => {
  return (
    <div role="status" className="animate-pulse pt-5 md:pt-10">
      <div className="h-2.5 bg-gray-200 rounded-full  dark:bg-gray-700 w-[200px] md:w-[500px] mb-10"></div>
      <div className="h-2.5 bg-gray-200 rounded-full  dark:bg-gray-700 w-[200px] md:w-[500px] mb-10"></div>
      <div className="h-2.5 bg-gray-200 rounded-full  dark:bg-gray-700 w-[200px] md:w-[500px] mb-10"></div>
      <div className="h-2.5 bg-gray-200 rounded-full  dark:bg-gray-700 w-[200px] md:w-[500px] mb-10"></div>
      <div className="h-2.5 bg-gray-200 rounded-full  dark:bg-gray-700 w-[200px] md:w-[500px] mb-10"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loading;
