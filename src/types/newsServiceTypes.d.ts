export interface IGetNewsForAppParams {
  appid: string
  count: number
  maxLength: number
  format: "json" | "xml" | "vdf"
}

export interface INewsItem {
  
}

export interface IGetNewsForAppResponse {
  appnews: {
    appid: string
    newsitems: INewsItem[]
  }
}