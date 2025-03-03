import React from 'react';
import { WeatherData } from '../../types/weather';
import WeatherHeader from './WeatherHeader';
import WeatherDetails from './WeatherDetails';
import { formatTemperature } from '../../utils/formatters';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6 w-full max-w-md mx-auto">
      <WeatherHeader
        cityName={data.name}
        countryCode={data.sys.country}
        description={data.weather[0].description}
        icon={data.weather[0].icon}
      />

      <div className="mb-6">
        <div className="text-5xl font-bold text-center">
          {formatTemperature(data.main.temp)}
        </div>
        <div className="text-center text-gray-500">
          Feels like {formatTemperature(data.main.feels_like)}
        </div>
      </div>

      <WeatherDetails weatherData={data} />
    </div>
  );
};

export default WeatherCard;