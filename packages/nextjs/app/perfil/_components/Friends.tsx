"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Mico from "../../../public/mico.jpg";

export const Friends = () => {
  return (
    <div className="bg-primary rounded-3xl">
      <h2 className="text-center block text-2xl mb-2">Amigos</h2>
      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
          <h3>
            <Link href="/debug" passHref className="link">
              Amigo 1
            </Link>
          </h3>
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
          <h3>
            <Link href="/debug" passHref className="link">
              Amigo 2
            </Link>
          </h3>
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
          <h3>
            <Link href="/debug" passHref className="link">
              Amigo 3
            </Link>
          </h3>
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <Image
            src={Mico}
            alt="Profile photo"
            className="rounded-full w-36 h-36 object-cover border-gray-950 border-2"
          />
          <h3>
            <Link href="/debug" passHref className="link">
              Amigo 4
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};
