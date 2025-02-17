import { describe, test, expect } from '@jest/globals';
import { SteamClient } from '../../src/SteamClient';
import { SteamUserService } from '../../src/services/SteamUserService';

describe('SteamUserService', () => {
  const steamClient = new SteamClient('API_KEY');
  const userService = new SteamUserService(steamClient);

  test("should return player's summary", async () => {
    const response = await userService.GetPlayerSummaries({
      steamids: '76561197960435530',
    });

    expect(response.response).toBeDefined();
    expect(response.response.players.length).toBe(1);
  });

  test('should return friend list of a user', async () => {
    const response = await userService.GetFriendList({
      steamid: '76561197960435530',
      relationship: 'friend',
    });

    expect(response.friendslist).toBeDefined();
    expect(response.friendslist.friends.length).toBeGreaterThan(0);
  });
});
