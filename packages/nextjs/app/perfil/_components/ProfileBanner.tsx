"use client";

import React from "react";
import Image from "next/image";
import Mico from "../../../public/mico.jpg";
import { useAccount } from "wagmi";
import { Address, Balance } from "~~/components/scaffold-eth";

// import Link from "next/link";

export const ProfileBanner = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className=" rounded-xl flex justify-center items-center flex-col py-10 text-center">
        <Image
          src={Mico}
          alt="Profile photo"
          className="rounded-full w-48 h-48 object-cover border-gray-950 border-2"
        />
        <h2 className="text-lg font-bold mb-2">Perfil</h2>
        <div className="text-sm font-semibold mb-2">
          Address: <Address address={connectedAddress} />
        </div>
        <div className="text-sm font-semibold">
          Balance: <Balance address={connectedAddress} />
        </div>
      </div>
    </>
  );
};
