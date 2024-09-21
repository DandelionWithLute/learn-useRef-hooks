"use client";

import React, { useState, useRef } from "react";

const page = () => {
  const [state, setState] = useState(1);
  const testRef = useRef();

  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-3">
      {/* <div className="flex flex-col items-center justify-center w-[300px] h-[300px]"> */}
      <div className="text-5xl">Hooks</div>
      <div className="w-[150px] flex gap-3 justify-between">
        <div className="text-xl">useState</div>
        <button className="border border-black rounded p-1 px-3">click</button>
      </div>
      <div className="w-[150px] flex gap-3 justify-between">
        <div className="text-xl">useRef</div>
        <button className="border border-black rounded p-1 px-3">click</button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default page;
