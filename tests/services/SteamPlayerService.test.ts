import { describe, test, expect } from '@jest/globals';
import { SteamClient } from '../../src/SteamClient';
import { SteamPlayerService } from '../../src/services/SteamPlayerService';

describe('SteamPlayerService', () => {
  const steamClient = new SteamClient('API_KEY');
  const playerService = new SteamPlayerService(steamClient);

  test("should return player's owned games", async () => {
    const response = await playerService.GetOwnedGames({
      steamid: '76561197960434622',
    });

    expect(response.response).toBeDefined();
    expect(response.response.game_count).toBe(1073);
    expect(response.response.games.length).toBeGreaterThan(0);
  });

  test("should retrun player's recently played games", async () => {
    const response = await playerService.GetRecentlyPlayedGames({
      steamid: '76561197960434622',
    });

    expect(response.response).toBeDefined();
    expect(response.response.total_count).toBeGreaterThanOrEqual(0);
    expect(response.response.games.length).toBeGreaterThanOrEqual(0);
  });
});
