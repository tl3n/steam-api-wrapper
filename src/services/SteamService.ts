import { SteamClient } from "../SteamClient";

export class SteamService {
  protected steamClient: SteamClient;

  constructor(steamClient: SteamClient) {
    this.steamClient = steamClient;
  }
}
