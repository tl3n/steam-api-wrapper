export interface IPlayerSummary {
  steamid: string;
  personname: string;
  profileurl: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  personstate: number;
  communityvisibilitystate: number;
  profileset: number;
  lastlogoff: string;
  commentpermission: number;
  realname?: string;
  primaryclanid?: string;
  timecreated?: string;
  gameid?: string;
  gameserverip?: string;
  gameextrainfo?: string;
  cityid?: string;
  loccountrycode?: string;
  locstatecode?: string;
  loccityid?: string;
}

export interface IGetPlayerSummariesParams {
  steamids: string;
  format?: "json" | "xml" | "vdf";
}

export interface IGetPlayerSummariesResponse {
  response: {
    players: IPlayerSummary[];
  };
}

export interface IFriend {
  steamid: string;
  relationship: string;
  friend_since: string;
}

export interface IGetFriendListParams {
  steamid: string;
  relationship: "all" | "friend";
  format?: "json" | "xml" | "vdf";
}

export interface IGetFriendListResponse {
  friendslist: {
    friends: IFriend[];
  };
}
