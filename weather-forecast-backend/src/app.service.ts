import { YandexWeatherOutput } from './interfaces/yandexWeatherOutput.interface';
import { GetWeatherOutput } from './interfaces/getWeatherOutput.interface';
import { GetWeatherInput } from './interfaces/getWeatherInput.interface';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

const DAYS_LIMIT = '6';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getWeather(params: GetWeatherInput): Promise<GetWeatherOutput> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<YandexWeatherOutput>(
          `https://api.weather.yandex.ru/v2/forecast?lat=${params.lat}&lon=${params.lon}&limit=${DAYS_LIMIT}`,
          {
            headers: {
              'X-Yandex-API-Key':
                this.configService.getOrThrow('X-YANDEX-API-KEY'),
            },
          },
        )
        .pipe(
          catchError((error) => {
            throw new InternalServerErrorException(
              'Запрос к сервису Яндекс.Погода выполнен с ошибкой.',
            );
          }),
        ),
    );

    return {
      icon: data.fact.icon,
      city: data.geo_object.locality.name,
      currentDate: data.now_dt,
      currentTemp: data.fact.temp,
      forecasts: data.forecasts.map((item) => ({
        dayTemps: {
          min: Math.min(
            item.parts.day.temp_min,
            item.parts.evening.temp_min,
            item.parts.morning.temp_min,
            item.parts.night.temp_min,
          ),
          max: Math.max(
            item.parts.day.temp_max,
            item.parts.evening.temp_max,
            item.parts.morning.temp_max,
            item.parts.night.temp_max,
          ),
        },
        wind: {
          speed: item.parts.day_short.wind_speed,
          direction: item.parts.day_short.wind_dir,
        },
        icon: item.parts.day_short.icon,
        date: item.date,
      })),
    };
  }
}
