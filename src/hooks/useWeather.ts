import { useState } from 'react';
import { WeatherData, WeatherError } from '../types/weather';
import { fetchWeatherData } from '../services/weatherService';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<WeatherError | null>(null);

  const getWeather = async (city: string) => {
    if (!city.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchWeatherData(city);
      setWeatherData(data);
    } catch (err) {
      setWeatherData(null);
      setError(err as WeatherError);
    } finally {
      setLoading(false);
    }
  };

  const resetWeather = () => {
    setWeatherData(null);
    setError(null);
  };

  return {
    weatherData,
    loading,
    error,
    getWeather,
    resetWeather
  };
};