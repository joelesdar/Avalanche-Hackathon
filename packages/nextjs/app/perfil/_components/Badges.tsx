"use client";

import React from "react";
import Link from "next/link";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export const Badges = () => {
  return (
    <div className="bg-primary rounded-3xl">
      <h2 className="text-center block text-2xl mb-2">Insignias</h2>
      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <CheckBadgeIcon className="h-36 w-36 fill-secondary" />
          <h3>
            <Link href="/debug" passHref className="link">
              1 Semana a las 5am
            </Link>
          </h3>
          <p>Completado</p>
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <CheckBadgeIcon className="h-36 w-36 fill-secondary" />
          <h3>
            <Link href="/debug" passHref className="link">
              Meta 2
            </Link>
          </h3>
          <p>Completado</p>
        </div>
        <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
          <CheckBadgeIcon className="h-36 w-36 fill-secondary" />
          <h3>
            <Link href="/debug" passHref className="link">
              Meta 3
            </Link>
          </h3>
          <p>En progreso</p>
        </div>
      </div>
    </div>
  );
};
