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
      {isLoading ?
        <div class="flex justify-center items-center h-full">
          <img class="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
        </div> : <>
          <Main />
        </>}


    </div>
  )
}
