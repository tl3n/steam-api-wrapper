import { SteamClient } from "../SteamClient.js";
import {
  IGetNewsForAppParams,
  IGetNewsForAppResponse,
} from "../types/newsServiceTypes.js";
import { SteamService } from "./SteamService.js";

export class ISteamNewsService extends SteamService{
  private baseUrl = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?";

  constructor(steamClient: SteamClient) {
    super(steamClient);
  }

  async GetNewsForApp(params: IGetNewsForAppParams): Promise<IGetNewsForAppResponse> {
    return await this.steamClient.get<IGetNewsForAppResponse>(this.baseUrl, params);
  }
}
