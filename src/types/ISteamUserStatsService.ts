export interface IAchievementPercentage {
  name: string;
  percent: number;
}

export interface IGetGlobalAchievementPercentagesForAppParams {
  gameid: number;
  format?: "json" | "xml" | "vdf";
}

export interface IGetGlobalAchievementPercentagesForAppResponse {
  achievementpercentages: {
    achievements: IAchievementPercentage[];
  };
}

export interface IAchievement {
  apiname: string;
  achieved: number;
  unlocktime?: number;
  name?: string;
  description?: string;
}

export interface IGetPlayerAchievementsParams {
  steamid: string;
  appid: number;
  l?: string;
}

export interface IGetPlayerAchievementsResponse {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: IAchievement[];
    success: boolean;
  };
}

export interface IGetUserStatsForGameParams {
  steamid: string;
  appid: number;
  l?: string;
}

export interface IGetUserStatsForGameResponse {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: IAchievement[];
    stats: {
      name: string;
      value: number;
    }[];
  };
}
