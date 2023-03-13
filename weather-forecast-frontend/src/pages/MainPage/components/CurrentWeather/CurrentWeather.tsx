import { FC } from "react";
import { YandexWeatherData } from "../../../../api/shared/YandexWeatherData";
import { formatDate } from "../../../../utils/dateUtils";
import { windDirection } from "../../../../utils/windDirection";
import S from "./CurrentWeather.module.scss";

export interface CurrentWeatherProps {
  data: YandexWeatherData;
  handleButtonUpdateClick: () => void;
}

export const CurrentWeather: FC<CurrentWeatherProps> = ({ data, handleButtonUpdateClick }) => {
  const direction = windDirection[data.forecasts[0].wind.direction];

  return (
    <div className={S.currentWeather}>
      <div className={S.currentWeather__itemContainer}>
        <p className={S.currentWeather__title}>{`Погода в городе ${
          data.city || ""
        } сегодня ${formatDate(data?.currentDate || "")}`}</p>
        <div className={S.currentWeather__tempContainer}>
          <p className={S.currentWeather__temp}>
            {` Сейчас ${data.currentTemp}`}&#176;С
          </p>
          <img
            className={S.currentWeather__icon}
            alt="иконка погоды"
            src={`https://yastatic.net/weather/i/icons/funky/dark/${data.icon}.svg`}
          />
        </div>
      </div>
      <div className={S.currentWeather__separator} />
      <div className={S.currentWeather__itemContainer}>
        <p className={S.currentWeather__text}>
          {`Минимальная температура на сегодня: ${data.forecasts[0].dayTemps.min}`}
          &#176;С
        </p>
        <p className={S.currentWeather__text}>
          {`Максимальная температура на сегодня: ${data.forecasts[0].dayTemps.max}`}
          &#176;С
        </p>
        <p
          className={S.currentWeather__text}
        >{`Скорость ветра: ${data.forecasts[0].wind.speed} м/с`}</p>
        <p
          className={S.currentWeather__text}
        >{`Направление ветра: ${direction}`}</p>
        <button onClick={handleButtonUpdateClick} className={S.currentWeather__buttonUpdate}>Обновить данные</button>
      </div>
    </div>
  );
};
