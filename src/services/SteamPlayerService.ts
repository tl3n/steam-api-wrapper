import { SteamClient } from "../SteamClient";
import {
  IGetOwnedGamesParams,
  IGetOwnedGamesResponse,
  IGetRecentlyPlayedGamesParams,
  IGetRecentlyPlayedGamesResponse,
} from "../types/ISteamPlayerService";
import { SteamService } from "./SteamService";

export class SteamPlayerService extends SteamService {
  private baseUrl = "http://api.steampowered.com/IPlayerService/";
  constructor(steamClient: SteamClient) {
    super(steamClient);
  }

  async GetOwnedGames(
    params: IGetOwnedGamesParams
  ): Promise<IGetOwnedGamesResponse> {
    return await this.steamClient.get<IGetOwnedGamesResponse>(
      this.baseUrl + "/GetOwnedGames/v0001/?",
      params
    );
  }

  async GetRecentlyPlayedGames(
    params: IGetRecentlyPlayedGamesParams
  ): Promise<IGetRecentlyPlayedGamesResponse> {
    return await this.steamClient.get<IGetRecentlyPlayedGamesResponse>(
      this.baseUrl + "GetRecentlyPlayedGames/v0001/?",
      params
    );
  }
}
