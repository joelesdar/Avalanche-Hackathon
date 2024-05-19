"use client";

import React from "react";
import { TrophyIcon } from "@heroicons/react/24/outline";

// import Image from "next/image";
// import Link from "next/link";

export const DailyReport = () => {
  return (
    <div className="bg-indigo-400 rounded-xl flex justify-center items-center flex-col sm:flex-row gap-4 py-10">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <TrophyIcon className="h-64 w-64 fill-secondary" />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-center block text-2xl mb-2">Meta actual</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, delectus exercitationem! Recusandae,
          fuga. Dolor iste, nemo non ducimus consectetur magni explicabo beatae error voluptatum, eaque perferendis
          labore modi id dolores!
        </p>
        <button
          type="button"
          className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
        >
          <TrophyIcon className="h-6 w-6 fill-secondary" />
          <span className="ml-2">Completar</span>
        </button>
      </div>
    </div>
  );
};
