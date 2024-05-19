"use client";

import { Badges } from "./_components/Badges";
import { Friends } from "./_components/Friends";
import { Goals } from "./_components/Goals";
import { ProfileBanner } from "./_components/ProfileBanner";
import type { NextPage } from "next";

const Perfil: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <ProfileBanner />
          <Goals />
          <Friends />
          <Badges />
        </div>
      </div>
    </>
  );
};

export default Perfil;
