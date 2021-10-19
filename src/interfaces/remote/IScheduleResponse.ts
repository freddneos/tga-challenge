export interface IScheduleItem {
    id: number
    url: String
    name: String
    season: number
    number: number
    type: String
    airdate: String
    airtime: String
    airstamp: String
    runtime: number
    image?: String
    summary?: String
    show: IRemoteShow
    _links: {
      self: {
        href: String
      }
    }
}

export interface IRemoteShow {
  id: number
  url: String
  name: String
  type: String
  language: String
  genres: String[]
  status: String
  runtime: number
  averageRuntime: number
  premiered: String
  ended: String
  officialSite: String
  schedule: {
    time: String
    days: String[]
  }
  rating: {
    average?: number
  }
  weight: number
  network?: any
  webChannel: {
    id: number
    name: String
    country: {
      name: String
      code: String
      timezone: String
    }
  }
  dvdCountry?: String
  externals: {
    tvrage?: String
    thetvdb?: number
    imdb?: String
  }
  image: {
    medium: String
    original: String
  }
  summary: String
  updated: number
  _links: {
    self: {
      href: String
    }
    previousepisode: {
      href: String
    }
  }
}


type IScheduleResponse = IScheduleItem[]

export default IScheduleResponse
