import React from "react";

interface NumberInputProps {
  children: any;
  startingNumber: number;
  callback: (value: number) => void;
}

export default function NumberInput({ children, startingNumber, callback }: NumberInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className={"flex-center gap-2"}>
      {children}
      <div className={"flex-center h-10"}>
        <input
          ref={inputRef}
          type="number"
          className="w-full h-full bg-dark-preview border-none text-white rounded-l-md p-2 text-md"
          style={{ appearance: "textfield" }}
          value={startingNumber}
          onChange={(e) => callback(Number(e.target.value))}
        />
        {/* Custom up and down buttons */}
        <div className="flex flex-col h-full">
          <button
            className="bg-dark-preview border-none text-white rounded-tr-md p-1"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.stepUp();
                callback(Number(inputRef.current.value));
              }
            }}
          >
            <svg
              className="h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
          <button
            className="bg-dark-preview border-none text-white rounded-br-md p-1"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.stepDown();
                callback(Number(inputRef.current.value));
              }
            }}
          >
            <svg
              className="h-full"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
