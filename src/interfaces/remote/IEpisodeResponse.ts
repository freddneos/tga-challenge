export default interface IEpisodeResponse {
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
    days: []
  }
  rating: {
    average?: String
  }
  weight: Number
  network: {
    id: Number
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
    tvrage: Number
    thetvdb: Number
    imdb: String
  }
  image: {
    medium: String
    original: String
  }
  summary:String
  updated: Number
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
    id: Number
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
    updated: Number
    _links: {
      self: {
        href: String
      }
    }
  }
  character: {
    id: Number
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
