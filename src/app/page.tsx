import Image from "next/image";
import { getAllPlayers } from "@/crudfunctions/getAllPlayers";
import TopFivePlayersByTotal from "@/components/TopFivePlayersByTotal";
import Header from "@/components/Header";
import { UpdatePlayerType } from "@/types/playersType";
import PlayerTable from "@/components/playerTableComps/PlayerTable";
import { MobileColumns } from "@/components/playerTableComps/TableData";

export default async function Home() {
  const data: UpdatePlayerType[] = await getAllPlayers();
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center gap-4">
        <Header />
        <TopFivePlayersByTotal data={data} />
        <PlayerTable columns={MobileColumns} data={data} />
      </div>
    </main>
  );
}
