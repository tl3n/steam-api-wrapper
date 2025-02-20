# @tl3n/steam-api-wrapper

A simple wrapper for Steam Web API with support of TypeScript types.

# Installation

```sh
# Using npm
npm install @tl3n/steam-api-wrapper
```

# Getting Started

Before proceeding further, make sure that you have obtained Steam Web API key. More information can be found [here](https://steamcommunity.com/dev).

Let's start with an example. Imagine, that you need to obtain news posts for Team Fortress 2, or your hamster will die tomorrow. Don't panic! It's really easy to do:

```js
import { SteamClient, SteamNewsService } from "@tl3n/steam-api-wrapper";

// Create a new Steam client with your API key.
const steamClient = new SteamClient("YOUR_API_KEY_HERE");

// Create news service with your steamClient.
const newsService = new SteamNewsSerivce(steamClient);

// And now, all we need to do is to call our method.
const news = await newsService.GetNewsForApp({ appid: 440 });
```

And voilà! Your hamster will live another day.

```json
{
  appnews: {
    appid: 440,
    newsitems: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ],
    count: 3687
  }
}
```

# Documentation

This package provides functionality described [here](https://developer.valvesoftware.com/wiki/Steam_Web_API#GetNewsForApp_.28v0001.29). So, if the following section doesn't supply your needs, feel free to follow the link.

### SteamClient

Responsible for communication with Steam API. Remember to pass your API key!

```ts
const steamClient = new SteamClient("YOUR_API_KEY");

// Send request to Steam Web API URL with specified params
const response = await steamClient.get<T>("API URL", params);
```

### SteamNewsService

Wrapper for ISteamNews interface.

```ts
const newsService = new SteamNewsService(steamClient);

// Get news for specified appid.
const news = await newsService.GetNewsForApp({
  appid: 440,
  count: 3,
  maxlength: 300,
});
```

### SteamUserStatsService

Wrapper for ISteamUserStats interface.

```ts
const userStatsService = new SteamUserStatsService(steamClient);

// Get global achievements overview of a specific game in percentages.
const achievementPercentages =
  await userStatsService.GetGlobalAchievementPercentagesForApp({ gameid: 440 });

// Get list of user's achievements for by appid.
const playerAchievements = await userStatsService.GetPlayerAchievements({
  steamid: "76561197972495328",
  appid: 440,
});

// Get list of user's stats by appid.
const userStats = await userStatsService.GetUserStatsForGame({
  steamid: "76561197972495328",
  appid: 440,
});
```

### SteamUserService

Wrapper for ISteamUser interface.

```ts
const userService = new SteamUserService(steamClient);

// Get basic profile information for a list of 64-bit Steam IDs.
const playerSummaries = await userService.GetPlayerSummaries({
  steamids: "76561197960435530",
});

// Get a list of user's friends, provided their Steam Community profile is set to "Public".
const friendList = await userService.GetFriendList({
  steamid: "76561197960435530",
  relationship: "friend",
});
```

### SteamPlayerService

Wrapper for ISteamPlayer interface.

```ts
const playerService = new SteamPlayerService(steamClient);

// Get a list of games player owns along with some playtime information, if profile is public.
const ownedGames = await playerService.GetOwnedGames({
  steamid: "76561197960434622",
});

// Get a list of games that player has played in the last two weeks.
const recentlyPlayedGames = await playerService.GetRecentlyPlayedGames({
  steamid: "76561197960434622",
});
```
