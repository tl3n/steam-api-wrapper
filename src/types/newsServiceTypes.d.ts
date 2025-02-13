export interface IGetNewsForAppParams {
  appid: string;
  count?: number;
  maxLength?: number;
  format?: "json";
}

export interface INewsItem {}

export interface IGetNewsForAppResponse {
  appnews: {
    appid: string;
    newsitems: INewsItem[];
  };
}
