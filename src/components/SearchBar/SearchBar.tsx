import React, { useState } from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');
  const [inputError, setInputError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!city.trim()) {
      setInputError('Please enter a location');
      return;
    }
    
    setInputError('');
    onSearch(city);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    if (e.target.value.trim()) {
      setInputError('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div className="relative">
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter city name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {inputError && <p className="text-red-500 text-sm mt-1">{inputError}</p>}
        </div>
        <button
          type="submit"
          disabled={!city.trim() || isLoading}
          className={`px-4 py-2 rounded-lg text-white font-semibold ${
            !city.trim() || isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <LoadingSpinner size="sm" color="border-white" />
              <span className="ml-2">Loading...</span>
            </div>
          ) : (
            'Get Weather'
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;