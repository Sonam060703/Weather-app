import React from 'react';
import { formatTime } from '../../utils/formatters';
import { WeatherData } from '../../types/weather';
import { FaWind, FaTint } from "react-icons/fa"; 

interface WeatherDetailsProps {
  weatherData: WeatherData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherData }) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          {/* <div className="text-blue-500 text-sm">Humidity</div> */}
          <div className="text-blue-500 text-4xl">
  <FaTint /> </div>
          <div className="font-semibold">{weatherData.main.humidity}%</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">  
          {/* <div className="text-blue-500 text-sm"><WiStrongWind /></div>  */}
          <div className="text-blue-500 text-4xl">
  <FaWind />
</div>

          <div className="font-semibold">{weatherData.wind.speed} m/s</div>
        </div>
        {/* <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-blue-500 text-sm">Pressure</div>
          <div className="font-semibold">{weatherData.main.pressure} hPa</div>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="text-blue-500 text-sm">Visibility</div>
          <div className="font-semibold">
            {weatherData.visibility ? `${weatherData.visibility / 1000} km` : 'N/A'}
          </div>
        </div> */}
      </div>

      <div className="flex justify-between mt-4 text-sm text-gray-500">
        <div>
          <span>Sunrise: </span>
          <span>{formatTime(weatherData.sys.sunrise)}</span>
        </div>
        <div>
          <span>Sunset: </span>
          <span>{formatTime(weatherData.sys.sunset)}</span>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;