export type GameType = {
  id?: string;
  minutesPlayed: string;
  fieldGoals: string;
  fieldGoalAttempts: string;
  fieldGoalPercentage: string;
  threePointers: string;
  twoPointers: string;
  totalRebounds: string;
  assists: string;
  blocks: string;
  turnovers: string;
  points: string;
  playerId?: string;
  createdAt?: string;
};

export type TotalStatsType = {
  [key: string]: string | undefined;
  id?: string;
  totalGamesPlayed?: string;
  totalGamesStarted?: string;
  minutesPlayed?: string;
  fieldGoals?: string;
  fieldGoalAttempts?: string;
  fieldGoalPercentage?: string;
  threePointers?: string;
  twoPointers?: string;
  totalRebounds?: string;
  assists?: string;
  blocks?: string;
  turnovers?: string;
  points?: string;
  playerId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type PlayerType = {
  id: string;
  playerName: string;
  age: string;
  playerImage: string;
  playersId: string;
  createdAt: string;
  updatedAt: string;
  games?: GameType[];
  totalStats?: TotalStatsType[];
};

export type JsonPlayerType = {
  playerName: string;
  minutesPlayed: string;
  totalGamesPlayed: string;
  totalGamesStarted: string;
  fieldGoals: string;
  fieldGoalAttempts: string;
  fieldGoalPercentage: string;
  threePointers: string;
  twoPointers: string;
  totalRebounds: string;
  assists: string;
  blocks: string;
  turnovers: string;
  points: string;
};

export type JsonTotalStatsType = {
  playerName: string;
  totalGamesPlayed: string;
  totalGamesStarted: string;
  minutesPlayed: string;
  fieldGoals: string;
  fieldGoalAttempts: string;
  fieldGoalPercentage: string;
  threePointers: string;
  twoPointers: string;
  totalRebounds: string;
  assists: string;
  blocks: string;
  turnovers: string;
  points: string;
};

export type BodyType = {
  id?: string;
  totalGamesPlayed?: string;
  totalGamesStarted?: string;
  minutesPlayed?: string;
  fieldGoals?: string;
  fieldGoalAttempts?: string;
  fieldGoalPercentage?: string;
  threePointers?: string;
  twoPointers?: string;
  totalRebounds?: string;
  assists?: string;
  blocks?: string;
  turnovers?: string;
  points?: string;
  playerId?: string;
  createdAt?: string;
};

export type UpdatePlayerType = {
  id?: string;
  playerName?: string;
  age?: string;
  playerImage?: string;
  playersId?: string;
  createdAt?: string;
  updatedAt?: string;
  games?: {
    id?: string;
    minutesPlayed: string;
    fieldGoals?: string;
    fieldGoalAttempts?: string;
    fieldGoalPercentage?: string;
    threePointers?: string;
    twoPointers?: string;
    totalRebounds?: string;
    assists?: string;
    blocks?: string;
    turnovers?: string;
    points?: string;
    playerId?: string;
    createdAt?: string;
  }[];
  totalStats?: {
    id?: string;
    totalGamesPlayed?: string;
    totalGamesStarted?: string;
    minutesPlayed?: string;
    fieldGoals?: string;
    fieldGoalAttempts?: string;
    fieldGoalPercentage?: string;
    threePointers?: string;
    twoPointers?: string;
    totalRebounds?: string;
    assists?: string;
    blocks?: string;
    turnovers?: string;
    points?: string;
    playerId?: string;
    createdAt?: string;
    updatedAt?: string;
  }[];
};
