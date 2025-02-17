export interface IGetNewsForAppParams {
  appid: number;
  count?: number;
  maxlength?: number;
  format?: "json";
}

export interface INewsItem {}

export interface IGetNewsForAppResponse {
  appnews: {
    appid: number;
    newsitems: INewsItem[];
  };
}
