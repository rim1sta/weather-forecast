import { FC } from "react";
import { useMainPageLogic } from "./MainPage.logic";
import S from "./MainPage.module.scss";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { ForecastItem } from "./components/ForecastItem/ForecastItem";

export const MainPage: FC = () => {
  const { data, handleClick, isButtonDisable, message } = useMainPageLogic();

  return (
    <div className={S.mainPage}>
      {!data && (
        <>
          <button
            onClick={handleClick}
            disabled={isButtonDisable}
            className={S.mainPage__button}
          >
            Получить прогноз погоды
          </button>
          {isButtonDisable && <p className={S.mainPage__errorMessage}>{message}</p>}
        </>
      )}
      {!!data && (
        <CurrentWeather handleButtonUpdateClick={handleClick} data={data} />
      )}
      <div className={S.mainPage__forecast}>
        {!!data &&
          data.forecasts
            .filter((item, index) => index > 0)
            .map((forecast, index) => (
              <ForecastItem key={index} data={forecast} />
            ))}
      </div>
    </div>
  );
};
