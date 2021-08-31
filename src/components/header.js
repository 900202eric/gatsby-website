import React from "react"
import Toggle from "./toggle"

export default function Header() {
  return (
    <div className="absolute content-center w-11/12 container flex flex-row items-center font-serif z-50">
      <a href="/" className="header text-md sm:text-lg px-1 sm:px-4 py-2 sm:py-5 cursor-pointer hover:bg-gray-800 hover:bg-opacity-20">HWC's Blog</a>
      <a href="/about/" className="header text-sm sm:text-lg px-1 sm:px-4 py-2 sm:py-5 cursor-pointer hover:bg-gray-800 hover:bg-opacity-20">About</a>
      <a href="/blog/" className="header text-sm px-1 sm:px-4 py-2 sm:py-5 sm:text-lg cursor-pointer hover:bg-gray-800 hover:bg-opacity-20">Blog</a>
      <a href="/contact/" className="header text-sm px-1 sm:px-4 py-2 sm:py-5 sm:text-lg cursor-pointer hover:bg-gray-800 hover:bg-opacity-20">Contact Me</a>
      <div className="flex-grow"></div>
      <Toggle className="mr-0 transition duration-500 hover:bg-gray-800 hover:bg-opacity-20"></Toggle>
    </div>
  )
}