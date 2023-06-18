"use client"
import { useEffect, useState } from "react";

import Main from "./component/Main";


export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to represent website content loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className=" h-screen">
      {isLoading ? <>
        <div className="flex items-center justify-center h-screen">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
        </div></> : <>
        <Main />
      </>}


    </div>
  )
}
