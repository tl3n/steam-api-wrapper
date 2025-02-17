import { SteamService } from './SteamService';
import { SteamClient } from '../SteamClient';
import {
  IGetGlobalAchievementPercentagesForAppParams,
  IGetGlobalAchievementPercentagesForAppResponse,
  IGetPlayerAchievementsParams,
  IGetPlayerAchievementsResponse,
  IGetUserStatsForGameParams,
  IGetUserStatsForGameResponse,
} from '../types/ISteamUserStatsService';

export class SteamUserStatsService extends SteamService {
  private baseUrl = 'http://api.steampowered.com/ISteamUserStats/';
  constructor(steamClient: SteamClient) {
    super(steamClient);
  }

  async GetGlobalAchievementPercentagesForApp(
    params: IGetGlobalAchievementPercentagesForAppParams
  ): Promise<IGetGlobalAchievementPercentagesForAppResponse> {
    return await this.steamClient.get<IGetGlobalAchievementPercentagesForAppResponse>(
      this.baseUrl + 'GetGlobalAchievementPercentagesForApp/v0002/?',
      params
    );
  }

  async GetPlayerAchievements(
    params: IGetPlayerAchievementsParams
  ): Promise<IGetPlayerAchievementsResponse> {
    return await this.steamClient.get<IGetPlayerAchievementsResponse>(
      this.baseUrl + 'GetPlayerAchievements/v0001/?',
      params
    );
  }

  async GetUserStatsForGame(
    params: IGetUserStatsForGameParams
  ): Promise<IGetUserStatsForGameResponse> {
    return await this.steamClient.get<IGetUserStatsForGameResponse>(
      this.baseUrl + 'GetUserStatsForGame/v0002/?',
      params
    );
  }
}
