import axios from "axios";

export class SteamClient {
  private steamApiKey: string;

  constructor(steamApiKey: string) {
    this.steamApiKey = steamApiKey;
  }

  async get<T>(url: string, params: object): Promise<T> {
    const paramsWithKey = { ...params, key: this.steamApiKey };
    const response = await axios.get<T>(url, { params: paramsWithKey });

    return response.data;
  }
}
