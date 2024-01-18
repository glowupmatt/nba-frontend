import { getAllPlayers } from "@/crudfunctions/getAllPlayers";
import TopFivePlayersByTotal from "@/components/TopFivePlayersByTotal";
import Header from "@/components/Header";
import { PlayerTypeAPI } from "@/types/playersType";
import TableDisplay from "@/components/playerTableComps/TableDisplay";

export default async function Home() {
  const data: PlayerTypeAPI[] = await getAllPlayers();

  return (
    <main className="">
      <div className="flex flex-col items-center justify-center gap-4">
        <Header />
        <TopFivePlayersByTotal data={data} />
        <div className="max-w-[90%] w-screen border-black overflow-scroll rounded-[1rem] border-[.3rem]">
          <TableDisplay data={data} />
        </div>
      </div>
    </main>
  );
}
