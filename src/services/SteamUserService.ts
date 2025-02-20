import { SteamClient } from "../SteamClient";
import {
  IGetFriendListParams,
  IGetFriendListResponse,
  IGetPlayerSummariesParams,
  IGetPlayerSummariesResponse,
} from "../types/ISteamUserService";
import { SteamService } from "./SteamService";

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

  async GetFriendList(
    params: IGetFriendListParams
  ): Promise<IGetFriendListResponse> {
    return await this.steamClient.get<IGetFriendListResponse>(
      this.baseUrl + "GetFriendList/v0001/?",
      params
    );
  }
}
