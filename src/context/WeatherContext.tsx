import React, { createContext, useContext, ReactNode } from 'react';
import { useWeather } from '../hooks/useWeather';
import { WeatherData, WeatherError } from '../types/weather';

interface WeatherContextType {
  weatherData: WeatherData | null;
  loading: boolean;
  error: WeatherError | null;
  getWeather: (city: string) => Promise<void>;
  resetWeather: () => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const weatherState = useWeather();
  
  return (
    <WeatherContext.Provider value={weatherState}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};