import { GetWeatherOutput } from './interfaces/getWeatherOutput.interface';
import { GetWeatherInput } from './interfaces/getWeatherInput.interface';
import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('weather')
  getWeather(@Query() params: GetWeatherInput): Promise<GetWeatherOutput> {
    return this.appService.getWeather(params);
  }
}
