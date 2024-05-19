"use client";

import type { NextPage } from "next";
import { DailyReport } from "~~/components/DailyReport";
import { FriendsBoard } from "~~/components/FriendsBoard";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow bg-info">
        <DailyReport />
        <FriendsBoard />
        {/* <MissionsBanner /> */}
      </div>
    </>
  );
};

export default Home;
