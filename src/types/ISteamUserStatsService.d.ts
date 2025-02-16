export interface IAchievementPercentage {
  name: string;
  percent: number;
}

export interface IGetGlobalAchievementPercentagesForAppParams {
  gameid: string;
  format?: "json" | "xml" | "vdf";
}

export interface IGetGlobalAchievementPercentagesForAppResponse {
  achievementpercentages: {
    achievement: IAchievementPercentage[];
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
  appid: string;
  l?: string;
}

export interface IGetPlayerAchievementsResponse {
  playerstats: {
    steamID: string;
    gameName: string;
    achievements: IAchievement[];
  };
}

export interface IGetUserStatsForGameParams {
  steamid: string;
  appid: string;
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
