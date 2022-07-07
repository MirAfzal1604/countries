export class apiAllCountries {
  constructor(
      public flagImg: String,
      public name: String,
      public population: Number,
      public region?: String,
      public capital?: String
  ) {
  }
}