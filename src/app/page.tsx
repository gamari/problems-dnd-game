"use client";

import dynamic from "next/dynamic";

// import { Game } from "@/components/Game";

const Game = dynamic(
  () => import("../components/Game").then((mod) => mod.Game),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Game />
    </div>
  );
}
