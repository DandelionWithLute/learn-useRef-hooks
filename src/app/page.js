"use client";

import { useRef, useState } from "react";

export default function Home() {
  const [state, setState] = useState("123");
  const testRef = useRef();
  return (
    <div className="flex flex-col w-full h-[100vh] items-center justify-center gap-3">
      {/* <div className="flex flex-col items-center justify-center w-[300px] h-[300px]"> */}
      <div className="text-5xl">Hooks</div>
      <div className="min-w-[200px] flex gap-3 justify-between">
        <div className="text-xl">useState {state}</div>
        <button
          className="border border-black rounded p-1 px-3"
          onClick={() => {
            setState(state + 1);
          }}
        >
          click
        </button>
      </div>
      <div className="min-w-[200px] flex gap-3 justify-between">
        <div className="text-xl">useRef</div>
        <div ref={testRef}></div>
        <input className="border border-red-500 p-1 rounded" />
        <button
          className="border border-black rounded p-1 px-3"
          onClick={(e) => {
            // return testRef.current.click();
            return (testRef.current += "123");
          }}
        >
          click
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}
