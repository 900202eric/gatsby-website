import React from "react"
import Toggle from "./toggle"

export default function Header() {
  return (
    <div className="container flex flex-row items-center my-5 font-sans">
      <a href="/" className="header text-4xl mx-4 hover:underline cursor-pointer">HWC's Blog</a>
      <a href="/about/" className="header text-2xl mx-4 hover:underline cursor-pointer">About</a>
      <a href="/blog/" className="header text-2xl mx-4 hover:underline cursor-pointer">Blog</a>
      <a href="/contact/" className="header text-2xl mx-4 hover:underline cursor-pointer">Contact Me</a>
      <div className="flex-grow"></div>
      <Toggle className="mr-0"></Toggle>
    </div>
  )
}