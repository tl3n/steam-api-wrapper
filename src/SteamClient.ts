import axios from "axios";

export class SteamClient {
  private steamApiKey: string;

  constructor(steamApiKey: string) {
    this.steamApiKey = steamApiKey;
  }

  async get<T>(url: string, params: object): Promise<T> {
    if (!url.includes("http://api.steampowered.com/")) {
      throw new Error("Provided URL is not Steam Web API URL.");
    }

    const paramsWithKey = { ...params, key: this.steamApiKey };

    try {
      var response = await axios.get<T>(url, { params: paramsWithKey });
    } catch (err) {
      throw err;
    }

    return response.data;
  }
}
