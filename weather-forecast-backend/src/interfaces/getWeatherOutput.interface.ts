export interface GetWeatherOutput {
  city: string;
  currentDate: string;
  currentTemp: number;
  icon: string;
  forecasts: {
    dayTemps: {
      min: number;
      max: number;
    };
    wind: {
      speed: number;
      direction: string;
    };
    icon: string;
    date: string;
  }[];
}
