import React from "react";
import Group from "./Group 77.png";

export default function Main() {
  return (
    <main className="bg-[#FFFFFF] text-black p-5 flex flex-col mt-1">
      <img className="self-center mr-2 px-9" src={Group} alt="group" />
      <h1 className="mt-3 text-4xl font-bold">Online Experiences</h1>
      <p className="w-64 mt-4 font-light">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </main>
  );
}
