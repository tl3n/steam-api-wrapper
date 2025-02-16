export interface IGame {
  appid: number;
  name: string;
  playtime_2weeks: number;
  playtime_forever: number;
  img_icon_url: string;
  img_logo_url: string;
  has_community_visible_stats?: boolean;
}

export interface IGetOwnedGamesParams {
  steamid: string;
  include_appinfo?: boolean;
  include_played_free_games?: boolean;
  format?: "json" | "xml" | "vdf";
  appids_filter?: number[];
}

export interface IGetOwnedGamesResponse {
  game_count: number;
  games: IGame[];
}

export interface IGetRecentlyPlayedGamesParams {
  steamid: string;
  count: number;
  format?: "json" | "xml" | "vdf";
}

export interface IGetRecentlyPlayedGamesResponse {
  total_count: number;
  games: IGame[];
}
