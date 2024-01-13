import axios from "axios";

export const getAllPlayers = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      DATA_API_KEY: process.env.DATA_API_KEY as string,
    };
    const response = await axios.get(
      `https://nba-database-seven.vercel.app/api/get-all-players-current-data`,
      { headers: headers }
    );

    const data = await response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
