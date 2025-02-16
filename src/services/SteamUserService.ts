import { SteamClient } from "../SteamClient.js";
import {
  IGetPlayerSummariesParams,
  IGetPlayerSummariesResponse,
} from "../types/ISteamUserService.js";
import { SteamService } from "./SteamService.js";

export class SteamUserService extends SteamService {
  private baseUrl = "http://api.steampowered.com/ISteamUser/";

  constructor(steamClient: SteamClient) {
    super(steamClient);
  }

  async GetPlayerSummaries(
    params: IGetPlayerSummariesParams
  ): Promise<IGetPlayerSummariesResponse> {
    return await this.steamClient.get<IGetPlayerSummariesResponse>(
      this.baseUrl + "GetPlayerSummaries/v0002/?",
      params
    );
  }

  async GetFriendList() {}
}
