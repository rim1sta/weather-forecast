import { useEffect, useState } from "react";
import { YandexWeatherData } from "../../api/shared/YandexWeatherData";
import { getErrorMessage } from "../../utils/getErrorMessages";

interface Position {
  longitude: number | null;
  latitude: number | null;
}

interface GeoStatus {
  isButtonDisable: boolean;
  message?: string;
}

    

export const useMainPageLogic = () => {
  const [position, setPosition] = useState<Position>({
    latitude: null,
    longitude: null,
  });
  const [geoStatus, setGeoStatus] = useState<GeoStatus>({
    isButtonDisable: true,
    message: "Геолокация загружается",
  });
  const [data, setData] = useState<YandexWeatherData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [err, setErr] = useState<unknown>();

  const onChange = (position: GeolocationPosition) => {
    setGeoStatus({ isButtonDisable: false });
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const onError = (err: GeolocationPositionError) => {
    console.log(err);
    setGeoStatus({ isButtonDisable: true, message: getErrorMessage(err.code) });
  };

  useEffect(() => {
    if (!navigator || !navigator.geolocation) {
      setGeoStatus({
        isButtonDisable: true,
        message: "К сожалению, определение геолокации не поддерживается.",
      });
      return;
    }
    navigator.geolocation.getCurrentPosition(onChange, onError);
  }, []);

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}weather?lat=${position.latitude}&lon=${position.longitude}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result: YandexWeatherData = await response.json();

      setData(result);
    } catch (err) {
      setErr(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { ...geoStatus, data, handleClick, isLoading, err };
};
