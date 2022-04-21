export interface Country {
    countryregion: string;
    lastupdate: string;
    location: { lat: number; lng: number };
    countrycode: { iso2: string; iso3: string };
    confirmed: number;
    deaths: number;
    recovered: number;
  }
  