"use client";

import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

// import Image from "next/image";
// import Link from "next/link";

export const FriendsBoard = () => {
  return (
    <div className="bg-indigo-600 rounded-xl flex justify-center items-center flex-col gap-4 py-10">
      <h2>Progreso de tus amigos</h2>
      <div className="w-full md:w-1/2 flex items-center bg-indigo-400 rounded-xl px-4">
        <UserCircleIcon className="h-8 w-8 fill-secondary" />
        <p>Alejandro sorongo</p>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: 90 + "%" }}
          >
            {" "}
            90%
          </div>
        </div>
      </div>
    </div>
  );
};
