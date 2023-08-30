"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { AiFillCopy } from "react-icons/ai";
import { BsClipboard2Check } from "react-icons/bs";
import { useState } from "react";
const ClipBoard = ({ data }) => {
  const [copy, setCopy] = useState(false);

  return (
    <div className="grid h-screen w-full">
      <div className="max-w-2xl bg-gray-600 rounded-md overflow-x-auto">
        <div className="flex justify-between px-4 text-white items-center">
          <p className="text-sm">code source</p>
          {copy ? (
            <button
              className="py-1 inline-flex items-center"
              onClick={() => {
                navigator.clipboard.writeText(data.code);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 2000);
              }}
            >
              <span className="flex">
                <p className="text-sm">Copied!</p>
                <BsClipboard2Check className="w-8 hover:scale-90" size={18} />
              </span>
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center"
              onClick={() => {
                navigator.clipboard.writeText(data.code);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 2000);
              }}
            >
              <span className="flex">
                <p className="text-sm">Copy code</p>
                <AiFillCopy className="w-8 hover:scale-90" size={18} />
              </span>
            </button>
          )}
        </div>

        <SyntaxHighlighter
          language="jsx"
          style={dracula}
          customStyle={{
            padding: "20px",
            width: "screen",
            height: "full",
            borderRadius: "10px",
            
          }}
        >
          {data.code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default ClipBoard;
