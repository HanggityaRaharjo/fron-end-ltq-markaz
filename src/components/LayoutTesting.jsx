import React from "react";

const LayoutTesting = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <div className="absolute -top-1/2 -left-[300px]">
        <div className="w-[600px] h-[600px] border border-gray-400 rounded-full relative animate-spin duration-500 ">
          <div className="absolute w-2 h-2 bg-gray-400 rounded-full -right-1 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute -top-1/2 -left-[300px] scale-[1.2]">
        <div className="w-[600px] h-[600px] border border-gray-400 rounded-full relative animate-spin duration-500 delay-200">
          <div className="absolute w-2 h-2 bg-gray-400 rounded-full -right-1 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute -top-1/2 -left-[300px] scale-[1.4]">
        <div className="w-[600px] h-[600px] border border-gray-400 rounded-full relative animate-spin duration-500 ">
          <div className="absolute w-2 h-2 bg-gray-400 rounded-full -right-1 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute -top-1/2 -left-[300px] scale-[1.6]">
        <div className="w-[600px] h-[600px] border border-gray-400 rounded-full relative animate-spin duration-500 ">
          <div className="absolute w-2 h-2 bg-gray-400 rounded-full -right-1 top-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default LayoutTesting;
