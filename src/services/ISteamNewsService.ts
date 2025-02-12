import { SteamClient } from "../SteamClient.js";
import {
  IGetNewsForAppParams,
  IGetNewsForAppResponse,
} from "../types/newsServiceTypes.js";

const baseUrl = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?";

export class SteamNewsService {
  private steamClient: SteamClient;

  constructor(steamClient: SteamClient) {
    this.steamClient = steamClient;
  }

  async GetNewsForApp(params: IGetNewsForAppParams): Promise<IGetNewsForAppResponse> {
    return await this.steamClient.get<IGetNewsForAppResponse>(baseUrl, params);
  }
}
