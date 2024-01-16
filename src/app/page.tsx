import Image from "next/image";
import { getAllPlayers } from "@/crudfunctions/getAllPlayers";
import TopFivePlayersByTotal from "@/components/TopFivePlayersByTotal";
import Header from "@/components/Header";
import { UpdatePlayerType } from "@/types/playersType";

export default async function Home() {
  const data: UpdatePlayerType[] = await getAllPlayers();
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center gap-4">
        <Header />
        <TopFivePlayersByTotal data={data} />
      </div>
    </main>
  );
}
