import React from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import LoadingSpinner from './components/LoadingSpinner';
import { WeatherProvider, useWeatherContext } from './context/WeatherContext';
import './App.css';

const WeatherApp: React.FC = () => {
  const { weatherData, loading, error, getWeather } = useWeatherContext();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-start py-12 px-4">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">वातावरण सूचक</h1>
      
      <SearchBar onSearch={getWeather} isLoading={loading} />
      
      {error && <ErrorMessage message={error.message} />}
      
      {loading && !error && (
        <div className="flex justify-center mt-12">
          <LoadingSpinner size="lg" />
        </div>
      )}
      
      {weatherData && !loading && !error && <WeatherCard data={weatherData} />}
      
      {!weatherData && !loading && !error && (
        <div className="mt-12 text-center text-gray-600">
          <p>Enter a city name to get the current weather</p>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
};

export default App;