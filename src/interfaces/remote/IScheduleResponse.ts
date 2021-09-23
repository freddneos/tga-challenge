export interface IScheduleItem {
    id: Number
    url: String
    name: String
    season: Number
    number: Number
    type: String
    airdate: String
    airtime: String
    airstamp: String
    runtime: Number
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
  id: Number
  url: String
  name: String
  type: String
  language: String
  genres: String[]
  status: String
  runtime: Number
  averageRuntime: Number
  premiered: String
  ended: String
  officialSite: String
  schedule: {
    time: String
    days: String[]
  }
  rating: {
    average?: Number
  }
  weight: Number
  network?: any
  webChannel: {
    id: Number
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
    thetvdb?: Number
    imdb?: String
  }
  image: {
    medium: String
    original: String
  }
  summary: String
  updated: Number
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
