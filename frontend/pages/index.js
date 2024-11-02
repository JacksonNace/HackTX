import Image from "next/image";
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

import React from 'react';

export default function Home() {
  // Example progress value (out of 100)
  const progress = 40; // Set this dynamically based on actual game progress

  return (
    <div
      className="flex relative min-h-screen bg-cover"
      style={{
        backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/019/969/350/large/florian-mazreku-outcasts-background-final.jpg?1565792939')",
      }}
    >

      {/* Progress Bar at the top */}
      <div className="fixed z-50 flex items-center" style={{ top: '60px', left: '0', right: '570px' }}>
        <div className="w-full px-4">
          <div className="bg-gray-300 h-4">
            <div
              className="h-full bg-blue-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Increment Circles */}
          <div className="absolute left-0 flex justify-between w-full">
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center border border-black">
                <span className="text-black">1</span>
              </div>
              <span className="text-xs mt-1">Start</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center border border-black">
                <span className="text-black">2</span>
              </div>
              <span className="text-xs mt-1">Mid</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center border border-black">
                <span className="text-black">3</span>
              </div>
              <span className="text-xs mt-1">End</span>
            </div>
          </div>
        </div>
      </div>

      {/* Character section on the left */}
      <div className="flex flex-col justify-end items-center w-[calc(100%-570px)] p-4 min-h-screen">
        <div className="flex items-center justify-between w-full px-8 mb-4">
          {/* Mockey Character */}
          <div className="flex flex-col items-center">
            <div className="h-2 w-32 bg-gray-300 rounded mb-1">
              <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
            </div>
            <img
              src="/mockey.png"
              alt="Mockey"
              className="h-48 w-48 object-contain"
            />
            <p className="text-xs">Health: 80/100</p>
          </div>

          {/* Cat Character */}
          <div className="flex flex-col items-center">
            <div className="h-2 w-32 bg-gray-300 rounded mb-1">
              <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
            </div>
            <img
              src="/cat.png"
              alt="Cat"
              className="h-48 w-48 object-contain"
            />
            <p className="text-xs">Health: 60/100</p>
          </div>
        </div>

        {/* Centered Question Box */}
        <div className="bg-white shadow-md p-4 rounded mb-8 w-3/4 max-w-lg text-black text-center">
          <h2 className="text-lg font-semibold">Question</h2>
          <p className="mt-2">
            Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
          </p>
        </div>
      </div>

      {/* Chatbox */}
      <div className="fixed right-0 top-0 h-screen w-[570px] bg-white shadow-lg border-l border-gray-200 z-50 flex flex-col">
        {/* Chatbox content */}
        <h2 className="p-4 text-lg font-semibold text-black">Chat</h2>
        <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">
          {/* Messages will be displayed here */}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow p-3 border border-gray-300 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
            />
            <button className="ml-2 bg-gray-800 text-white p-2 rounded-r-lg shadow hover:bg-gray-700 transition flex items-center justify-center">
              {/* Up Arrow SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m0 0H8l4-4 4 4h-3z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
