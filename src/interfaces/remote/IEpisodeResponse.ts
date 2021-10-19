export default interface IEpisodeResponse {
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
    days: []
  }
  rating: {
    average?: String
  }
  weight: number
  network: {
    id: number
    name: String
    country: {
      name: String
      code: String
      timezone: String
    }
  }
  webChannel?: String
  dvdCountry?: String
  externals: {
    tvrage: number
    thetvdb: number
    imdb: String
  }
  image: {
    medium: String
    original: String
  }
  summary:String
  updated: number
  _embedded: {
    cast: IShowCast[]
  }
  _links: {
    self: {
      href: String
    }
    previousepisode: {
      href: String
    }
  }
}



export interface IShowCast {
  person: {
    id: number
    url:String
    name: String
    country: {
      name: String
      code: String
      timezone: String
    }
    birthday: String
    deathday: String
    gender: String
    image: {
      medium: String
      original: String
    } | null
    updated: number
    _links: {
      self: {
        href: String
      }
    }
  }
  character: {
    id: number
    url:String
    name: String
    image: {
      medium: String
      original: String
    }
    _links: {
      self: {
        href: String
      }
    }
  }
  self: boolean
  voice: boolean
}
