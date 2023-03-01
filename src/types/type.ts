export type TCity = {
  city: string;
  city_ascii: string;
  lat: number;
  lng: number;
  country: string;
  iso2: string;
  iso3: string;
  admin_name: string;
  capital: string;
  population: null | number;
  id: number | string;
}

export type Tforecastday = {
  date: string;
  day: {
      maxtemp_c: number;
      mintemp_c: number;
      totalsnow_cm: number;
      daily_will_it_rain: number;
      daily_chance_of_rain: number;
      daily_will_it_snow: number;
      daily_chance_of_snow: number;
      condition: {
        text?: string;
        icon?: string;
        code: number;
      };
  };
  astro?: object;
  hour?: object[];
};

// export type Tforecast = {
//   date: string;
//   day: {
//       maxtemp_c: number;
//       mintemp_c: number;
//       totalsnow_cm: number;
//       daily_will_it_rain: number;
//       daily_chance_of_rain: number;
//       daily_will_it_snow: number;
//       daily_chance_of_snow: number;
//       condition: object;
//   };
//   astro?: object;
//   hour?: object[];
// }