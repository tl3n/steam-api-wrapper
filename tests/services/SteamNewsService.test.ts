import { SteamNewsService } from "../../src/services/SteamNewsService";
import { SteamClient } from "../../src/SteamClient";
import { describe, expect, test } from "@jest/globals";

describe("SteamNewsService", () => {
  const steamClient = new SteamClient("API_KEY");
  const newsService = new SteamNewsService(steamClient);

  test("should return news for the app", async () => {
    const response = await newsService.GetNewsForApp({
      appid: 440,
      count: 3,
      maxlength: 300,
    });

    expect(response.appnews.appid).toBe(440);
    expect(response.appnews.newsitems.length).toBe(3);
  });
});
