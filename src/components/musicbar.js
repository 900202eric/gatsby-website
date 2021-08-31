import React from "react"
import "../styles/markdown.css"

export default function Music (props) {
  return (
    <div className="relative h-64 sm:h-32 w-full container my-5 flex flex-row items-center justify-center bg-gray-200 dark:bg-gray-500 shadow-inner rounded-lg markdown">
      <h1 className="font-serif rounded-full ml-6 md:block hidden p-0 w-16 h-16 border-red-600 border-2 bg-red-400 text-center mx-3 shadow-inner pt-1 text-white pointer-events-none select-none">♬</h1>
      <div className="container flex flex-col justify-around w-5/6 pt-2 h-48 sm:h-32">
        <p className="font-serif text-2xl text-center sm:text-left">{props.Lyrics}</p>
        <div className="flex-grow sm:hidden"></div>
        <p className="font-normal font-sans text-sm text-right mr-5 self-end"><b>From </b> <code>{props.Song}</code> <b>by</b> <code>{props.Singer}</code> <b>in</b> <code>{props.Album}</code></p>
      </div>
    </div>
  )
}