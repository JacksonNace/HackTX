import Image from "next/image";
import { useState } from 'react';
import localFont from "next/font/local";

// Define your fonts here
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

export default function Home() {
  const [isChat, setIsChat] = useState(true); // State to toggle between chat and code editor

  return (
    <div
      className={`flex relative min-h-screen bg-cover ${geistSans.variable} ${geistMono.variable}`}
      style={{
        backgroundImage: "url('/background.jpg')", // Changed to local image
      }}
    >
      {/* Character section on the left */}
      <div className="flex flex-col justify-end items-center w-[calc(100%-570px)] p-4 min-h-screen">
        <div className="flex items-center justify-between w-full px-8 mb-4">
          {/* Mockey Character */}
          <div className="flex flex-col items-center">
          <p className="text-xs">Health: 80/100</p>
            <div className="h-2 w-32 bg-gray-300 rounded mb-1">
              <div className="h-full bg-green-500" style={{ width: '80%' }}></div>
            </div>
            <img
              src="/mockey.png"
              alt="Mockey"
              className="h-48 w-48 object-contain"
            />
          </div>

          {/* Cat Character */}
          <div className="flex flex-col items-center">
          <p className="text-xs">Health: 60/100</p>
            <div className="h-2 w-32 bg-gray-300 rounded mb-1">
              <div className="h-full bg-red-500" style={{ width: '60%' }}></div>
            </div>
            <img
              src="/cat.png"
              alt="Cat"
              className="h-48 w-48 object-contain"
            />
          </div>
        </div>

        {/* Centered Question Box */}
        <div className="bg-white shadow-md p-4 rounded mb-8 w-full max-w-5xl h-auto text-black text-center">
  <h2 className="text-lg font-semibold text-left antialiased">Question</h2>
  <h1 className="p-2 text-black antialiased text-left">
    Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.
  </h1>
        </div>
      </div>
{/* Chatbox or Code Editor */}
<div className="fixed right-0 top-0 h-screen w-[570px] bg-white shadow-lg border-l border-gray-200 z-50 flex flex-col">
  {/* Toggle Buttons at Top Center */}
  <div className="flex justify-center items-center p-4 border-b border-gray-200">
    <button
      onClick={() => setIsChat(true)}
      className={`px-4 py-2 rounded-l-lg ${isChat ? 'bg-purple-800 text-white' : 'bg-gray-200 text-gray-800'} transition`}
    >
      <h2 className="text-lg font-semibold">Chat</h2>
    </button>
    <button
      onClick={() => setIsChat(false)}
      className={`px-4 py-2 rounded-r-lg ${!isChat ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'} transition`}
    >
      <h2 className="text-lg font-semibold">Code Editor</h2>
    </button>
  </div>


        {/* Conditional Rendering for Chat or Code Editor */}
        <div className="p-4 overflow-y-auto h-[calc(100%-56px)]">
          {isChat ? (
            <div>
            </div>
          ) : (
            <div>
              <p3 className={`text-lg font-semibold text-black ${geistMono.variable}`}>Notes Section</p3>
              {/* Your code editor component can go here */}
              <textarea
                className="w-full h-full border border-gray-300 p-2 text-black antialiased"
                placeholder="Type your notes here..."
              ></textarea>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <input
              type="text"
              placeholder={isChat ? "Type a message..." : "Type code..."}
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
