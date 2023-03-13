import { FC } from "react";
import { Forecast } from "../../../../api/shared/YandexWeatherData";
import { formatDate } from "../../../../utils/dateUtils";
import S from "./ForecastItem.module.scss";
import { windDirection } from "../../../../utils/windDirection";

interface ForecastItemProps {
  data: Forecast;
}

export const ForecastItem: FC<ForecastItemProps> = ({ data }) => {
  const direction = windDirection[data.wind.direction];

  return (
    <div className={S.forecastItem}>
      <p>{formatDate(data.date)}</p>
      <img
        alt="иконка погоды"
        className={S.forecastItem__icon}
        src={`https://yastatic.net/weather/i/icons/funky/dark/${data.icon}.svg`}
      />
      <div className={S.forecastItem__minMaxTemps}>
        <p>{`Мин: ${data.dayTemps.min}`}&#176;С</p>
        <p>{`Макс: ${data.dayTemps.max}`}&#176;С</p>
      </div>
      <p>{"Скорость и направление ветра:"}</p>
      <p>{`${data.wind.speed} м/с, ${direction}`}</p>
    </div>
  );
};
