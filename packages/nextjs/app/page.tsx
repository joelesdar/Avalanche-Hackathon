"use client";

import type { NextPage } from "next";
import { DailyReport } from "~~/components/DailyReport";
import { FriendsBoard } from "~~/components/FriendsBoard";
import { MissionsBanner } from "~~/components/MissionsBanner";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <DailyReport />
          <FriendsBoard />
          <MissionsBanner />
        </div>
      </div>
    </>
  );
};

export default Home;
