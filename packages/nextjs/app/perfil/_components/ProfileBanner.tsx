"use client";

import React from "react";
import Image from "next/image";
import Perfil from "../../../public/profile.png";
import { useAccount } from "wagmi";
import { Address, Balance } from "~~/components/scaffold-eth";

// import Link from "next/link";

export const ProfileBanner = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="rounded-xl flex justify-center items-center flex-col py-10 text-center">
        <h2 className="text-7xl font-bold mb-2 pb-8">Perfil</h2>
        <Image
          src={Perfil}
          alt="Profile photo"
          className="rounded-full w-64 h-64 object-cover border-gray-950 border-2"
        />
        <h3 className="text-4xl font-bold mb-2 pb-8">Eduardo López</h3>
        <div className="text-sm font-semibold mb-2">
          Address: <Address address={connectedAddress} />
        </div>
        <div className="text-sm font-semibold">
          Balance: <Balance address={connectedAddress} />
        </div>
        <div className="text-center bg-[#FFCC32] rounded-lg p-10">
          <p className="text-3xl text-[#363B64] font-bold">{"Tus (ATC)"}</p>
          <p className="text-7xl text-[#363B64] font-bold">974</p>
        </div>
      </div>
    </>
  );
};
