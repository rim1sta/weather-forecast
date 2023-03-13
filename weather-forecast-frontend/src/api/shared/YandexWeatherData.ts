enum WindDirection  {
  NW = "nw",
  N = "n",
  NE = "ne",
  SE = "se",
  S = "s",
  SW = "sw",
  W = "w",
  C = "c",
  E = "e",
};

export interface Forecast {
  dayTemps: {
    min: number;
    max: number;
  };
  wind: {
    speed: number;
    direction: WindDirection;
  };
  icon: string;
  date: string;
}

export interface YandexWeatherData {
    city: string;
    currentDate: string;
    icon: string;
    currentTemp: number;
    forecasts: Forecast[];
}