"use client";

import React from "react";

export const DailyReport = () => {
  return (
    <>
      <div className="flex w-full justify-center items-center flex-col sm:flex-row gap-4 bg-cover bg-[url('../public/background.jpg')]">
        <div className="bg-gradient-to-t from-[#B9D122] to-[rgba(245, 245, 245, 0.16)] w-full py-10">
          <div className="w-full md:w-1/2 px-6 text-white pt-16 px-8">
            <h2 className="justify-center block text-7xl mb-2 font-bold">Recoge tu recompensa</h2>
            <p className="justify-center block text-3xl mb-2 font-medium">8 de 15 días</p>
          </div>
        </div>
      </div>
      <div className="justify-center items-center flex flex-col text-center">
        <button
          type="button"
          className="px-12 py-3 my-10 w-fit bg-accent font-semibold rounded-xl text-black outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
        >
          <span className="ml-2 text-2xl">Recoger</span>
        </button>
        <div className="flex gap-8 pb-10">
          <div className="rounded-full bg-[#219653] h-16 w-16"></div>
          <div className="rounded-full bg-[#219653] h-16 w-16"></div>
          <div className="rounded-full bg-[#219653] h-16 w-16"></div>
          <div className="rounded-full bg-[#219653] h-16 w-16"></div>
          <div className="rounded-full bg-[#C4C4C4] h-16 w-16"></div>
          <div className="rounded-full bg-[#C4C4C4] h-16 w-16"></div>
        </div>
      </div>
    </>
  );
};
