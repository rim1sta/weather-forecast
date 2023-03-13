export interface YandexWeatherOutput {
    now: number;
    now_dt: string;
    info: Info;
    geo_object: GeoObject;
    yesterday: Yesterday;
    fact: Fact;
    forecasts: Forecast[];
  }
  
  export interface Fact {
    obs_time: number;
    uptime: number;
    temp: number;
    feels_like: number;
    temp_water: number;
    icon: string;
    condition: Condition;
    cloudness: number;
    prec_type: number;
    prec_prob: number;
    prec_strength: number;
    is_thunder: boolean;
    wind_speed: number;
    wind_dir: WindDir;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    daytime: Daytime;
    polar: boolean;
    season: string;
    source: string;
    accum_prec: { [key: string]: number };
    soil_moisture: number;
    soil_temp: number;
    uv_index: number;
    wind_gust: number;
  }
  
  export enum Condition {
    Clear = 'clear',
    Cloudy = 'cloudy',
    LightRain = 'light-rain',
    LightSnow = 'light-snow',
    Overcast = 'overcast',
    Snow = 'snow',
    WetSnow = 'wet-snow',
  }
  
  export enum Daytime {
    D = 'd',
    N = 'n',
  }
  
  export enum WindDir {
    E = 'e',
    S = 's',
    SE = 'se',
    Sw = 'sw',
    W = 'w',
  }
  
  export interface Forecast {
    date: string;
    date_ts: number;
    week: number;
    sunrise: string;
    sunset: string;
    rise_begin: string;
    set_end: string;
    moon_code: number;
    moon_text: string;
    parts: Parts;
    hours: Hour[];
    biomet?: Biomet;
  }
  
  export interface Biomet {
    index: number;
    condition: string;
  }
  
  export interface Hour {
    hour: string;
    hour_ts: number;
    temp: number;
    feels_like: number;
    temp_water: number;
    icon: string;
    condition: Condition;
    cloudness: number;
    prec_type: number;
    prec_strength: number;
    is_thunder: boolean;
    wind_dir: WindDir;
    wind_speed: number;
    wind_gust: number;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    uv_index: number;
    soil_temp: number;
    soil_moisture: number;
    prec_mm: number;
    prec_period: number;
    prec_prob: number;
  }
  
  export interface Parts {
    day: Day;
    morning: Day;
    evening: Day;
    night_short: Day;
    day_short: Day;
    night: Day;
  }
  
  export interface Day {
    _source: string;
    temp_min?: number;
    temp_avg?: number;
    temp_max?: number;
    temp_water: number;
    wind_speed: number;
    wind_gust: number;
    wind_dir: WindDir;
    pressure_mm: number;
    pressure_pa: number;
    humidity: number;
    soil_temp: number;
    soil_moisture: number;
    prec_mm: number;
    prec_prob: number;
    prec_period: number;
    cloudness: number;
    prec_type: number;
    prec_strength: number;
    icon: string;
    condition: Condition;
    uv_index?: number;
    feels_like: number;
    daytime: Daytime;
    polar: boolean;
    fresh_snow_mm: number;
    temp?: number;
  }
  
  export interface GeoObject {
    district: Country;
    locality: Country;
    province: Country;
    country: Country;
  }
  
  export interface Country {
    id: number;
    name: string;
  }
  
  export interface Info {
    n: boolean;
    geoid: number;
    url: string;
    lat: number;
    lon: number;
    tzinfo: Tzinfo;
    def_pressure_mm: number;
    def_pressure_pa: number;
    slug: string;
    zoom: number;
    nr: boolean;
    ns: boolean;
    nsr: boolean;
    p: boolean;
    f: boolean;
    _h: boolean;
  }
  
  export interface Tzinfo {
    name: string;
    abbr: string;
    dst: boolean;
    offset: number;
  }
  
  export interface Yesterday {
    temp: number;
  }
  