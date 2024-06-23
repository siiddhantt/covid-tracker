import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full">
      <footer className="flex flex-row p-1 w-full items-center justify-center md:p-1 bg-slate-900 gap-1 shadow-xl">
        <a href="https://github.com/siiddhantt" className="">
          <div
            href="https://github.com/siiddhantt"
            className="text-sm  sm:text-center text-gray-200 hover:text-blue-200"
          >
            <FaGithub />
          </div>
        </a>
        <a href="https://github.com/siiddhantt" className="pb-[2px]">
          <span
            href="https://github.com/siiddhantt"
            className="text-sm  sm:text-center text-gray-200 hover:text-blue-200"
          >
            siiddhantt
          </span>
        </a>
      </footer>
    </div>
  );
}
