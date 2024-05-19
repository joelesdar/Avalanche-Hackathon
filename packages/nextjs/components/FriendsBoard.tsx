"use client";

import React from "react";
import Image from "next/image";
import Cara1 from "../public/cara1.jpg";
import Cara2 from "../public/cara2.jpg";
import Cara3 from "../public/cara3.jpg";

export const FriendsBoard = () => {
  return (
    <div className="w-full rounded-xl flex justify-center items-center flex-col gap-4 py-10 text-white">
      <div className="px-12 py-3 my-10 w-fit bg-accent font-semibold rounded-xl text-black outline-none flex">
        <h2 className="ml-2 text-2xl">Tus amigos</h2>
      </div>
      <div className="w-9/10 sm:w-4/5 lg:w-3/5 items-center mx-12 flex text-white bg-[#2F3546] rounded-xl">
        <Image src={Cara1} alt="face" className="w-36 rounded-xl"></Image>
        <div className="w-full px-4">
          <p className="text-2xl font-bold">Alejandro Muñoz</p>
          <p className="text-lg italic">Saltar la cuerda</p>
          <div className="flex gap-4 items-center justify-center">
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#C4C4C4] h-8 w-8"></div>
            <div className="rounded-full bg-[#C4C4C4] h-8 w-8"></div>
          </div>
        </div>
        <p className="text-3xl font-bold pr-4">4/15</p>
      </div>
      <div className="w-9/10 sm:w-4/5 lg:w-3/5 items-center mx-12 flex text-white bg-[#2F3546] rounded-xl">
        <Image src={Cara2} alt="face" className="w-36 rounded-xl"></Image>
        <div className="w-full px-4">
          <p className="text-2xl font-bold">Luisa G</p>
          <p className="text-lg italic">Saltar la cuerda</p>
          <div className="flex gap-4 items-center justify-center">
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#C4C4C4] h-8 w-8"></div>
            <div className="rounded-full bg-[#C4C4C4] h-8 w-8"></div>
          </div>
        </div>
        <p className="text-3xl font-bold pr-4">7/14</p>
      </div>
      <div className="w-9/10 sm:w-4/5 lg:w-3/5 items-center mx-12 flex text-white bg-[#2F3546] rounded-xl">
        <Image src={Cara3} alt="face" className="w-36 rounded-xl"></Image>
        <div className="w-full px-4">
          <p className="text-2xl font-bold">Nicolas M</p>
          <p className="text-lg italic">Aprender Inglés</p>
          <div className="flex gap-4 items-center justify-center">
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#219653] h-8 w-8"></div>
            <div className="rounded-full bg-[#C4C4C4] h-8 w-8"></div>
            <div className="rounded-full bg-[#C4C4C4] h-8 w-8"></div>
          </div>
        </div>
        <p className="text-3xl font-bold pr-4">33/160</p>
      </div>
    </div>
  );
};
