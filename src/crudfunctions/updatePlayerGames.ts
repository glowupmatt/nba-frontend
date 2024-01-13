import { BodyType } from "@/types/playersType";
import axios from "axios";

export const updatePlayerGames = async (playerId: string, body: BodyType) => {
  try {
    const headers = {
      "Content-Type": "application/json",
      DATA_API_KEY: process.env.DATA_API_KEY as string,
    };
    const response = await axios.put(
      `https://nba-database-seven.vercel.app/api/update-player-games/${playerId}`,
      body,
      { headers: headers }
    );
    const data = response;
    return data;
  } catch (err) {
    console.log(err);
  }
};
