import Image from "next/image";
import { getAllPlayers } from "@/crudfunctions/getAllPlayers";

export default async function Home() {
  // const data = await getAllPlayers();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">GET DUBS</h1>
        <p className="mt-8 text-2xl text-center">
          Were you born in the 90s? Get your dubs.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center"></div>
    </main>
  );
}
