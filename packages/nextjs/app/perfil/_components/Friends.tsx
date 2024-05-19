"use client";

import React from "react";
import Image from "next/image";
import Mico from "../../../public/mico.jpg";

export const Friends = () => {
  return (
    <div className="bg-info rounded-3xl">
      <h2 className="text-center block text-2xl mb-2">Amigos</h2>
      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
        <div className="flex flex-col px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
        </div>
        <div className="flex flex-col px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
        </div>
        <div className="flex flex-col px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
        </div>
        <div className="flex flex-col px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
        </div>
      </div>
    </div>
  );
};
