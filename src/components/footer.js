import React from "react"

export default function Footer () {
  return (
    <div className="container flex mx-auto">
      <div className="mx-5 pt-5 px-5 flex flex-col sm:flex-row text-gray-500 dark:text-gray-300 container sm:h-32 border-t-2 border-opacity-60">
        <span className="text-center my-2">© 2021 HWC</span>
        <div className="sm:flex-grow"/>
        <span className="mx-2 text-center my-2">github</span>
        <span className="mx-2 text-center my-2">medium</span>
        <span className="mx-2 text-center my-2">telegram</span>
        <span className="mx-2 text-center my-2">mail</span>
      </div>
    </div>
  )
}