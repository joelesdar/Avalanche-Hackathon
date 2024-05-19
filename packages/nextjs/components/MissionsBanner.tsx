"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import gym from "../public/gym.png";
import morning from "../public/morning.jpg";
import running from "../public/run.jpg";

export const MissionsBanner = () => {
  return (
    <div className="bg-primary rounded-3xl">
      <h2 className="text-center block text-2xl mb-2">Grupos sugeridos</h2>
      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <h3>
            <Link href="/debug" passHref className="link">
              Club de las 5am
            </Link>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ex magni quam corporis maiores adipisci atque
            laudantium incidunt neque.
          </p>
          <Image src={morning} alt="Girl waking up" />
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <h3>
            <Link href="/debug" passHref className="link">
              Bogotá Runners Club
            </Link>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ex magni quam corporis maiores adipisci atque
            laudantium incidunt neque.
          </p>
          <Image src={running} alt="Girl running" />
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <h3>
            <Link href="/debug" passHref className="link">
              30 días de Gym
            </Link>
          </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ex magni quam corporis maiores adipisci atque
            laudantium incidunt neque.
          </p>
          <Image src={gym} alt="Gym people" />
        </div>
      </div>
    </div>
  );
};
