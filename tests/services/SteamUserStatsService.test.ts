import { describe, test, expect } from "@jest/globals";
import { SteamClient } from "../../src/SteamClient";
import { SteamUserStatsService } from "../../src/services/SteamUserStatsService";

describe("SteamUserStatsService", () => {
  const steamClient = new SteamClient("API_KEY");
  const userStatsService = new SteamUserStatsService(steamClient);

  test("should return global achievement percentage for app", async () => {
    const response =
      await userStatsService.GetGlobalAchievementPercentagesForApp({
        gameid: 440,
        format: "json",
      });

    expect(response.achievementpercentages).toBeDefined();
    expect(response.achievementpercentages.achievements.length).toBeGreaterThan(
      0
    );
  });

  test("should return player's achievements", async () => {
    const response = await userStatsService.GetPlayerAchievements({
      steamid: "76561198875113615",
      appid: 440,
    });

    expect(response.playerstats).toBeDefined();
    expect(response.playerstats.steamID).toBe("76561198875113615");
    expect(response.playerstats.achievements.length).toBeGreaterThan(0);
    expect(response.playerstats.success).toBe(true);
  });

  test("should return user's stats for game", async () => {
    const response = await userStatsService.GetUserStatsForGame({
      steamid: "76561198875113615",
      appid: 440,
    });

    expect(response.playerstats).toBeDefined();
    expect(response.playerstats.steamID).toBe("76561198875113615");
    expect(response.playerstats.gameName).toBe("Team Fortress 2");
    expect(response.playerstats.stats.length).toBeGreaterThan(0);
    expect(response.playerstats.achievements.length).toBeGreaterThan(0);
  });
});
