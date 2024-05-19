"use client";

import { Friends } from "./_components/Friends";
import { ProfileBanner } from "./_components/ProfileBanner";
import type { NextPage } from "next";

const Perfil: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10 bg-info text-white">
        <div className="px-5">
          <ProfileBanner />
          <Friends />
        </div>
      </div>
    </>
  );
};

export default Perfil;
