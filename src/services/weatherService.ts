import { API_CONFIG } from '../config/api';
import { WeatherData } from '../types/weather';

export const fetchWeatherData = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}/weather?q=${city}&units=${API_CONFIG.UNITS}&appid=${API_CONFIG.API_KEY}`
    );
    
    if (!response.ok) {
      const errorData = await response.json();
      throw {
        message: errorData.message || `Failed with status: ${response.status}`,
        code: response.status
      };
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw { message: error.message };
    }
    throw error;
  }
};