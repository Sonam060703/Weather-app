import React from 'react';
import { formatDate } from '../../utils/formatters';
import { API_CONFIG } from '../../config/api';

interface WeatherHeaderProps {
  cityName: string;
  countryCode: string;
  description: string;
  icon: string;
}

const WeatherHeader: React.FC<WeatherHeaderProps> = ({ 
  cityName, 
  countryCode, 
  description, 
  icon 
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-2xl font-bold">
          {cityName}, {countryCode}
        </h2>
        <p className="text-gray-500">{formatDate()}</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={`${API_CONFIG.ICON_URL}/${icon}@2x.png`}
          alt={description}
          className="w-16 h-16"
        />
        <span className="capitalize text-gray-600">{description}</span>
      </div>
    </div>
  );
};

export default WeatherHeader;