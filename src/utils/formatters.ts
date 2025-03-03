export const formatTime = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  
  export const formatDate = (): string => {
    return new Date().toLocaleDateString([], {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  export const formatTemperature = (temp: number): string => {
    return `${Math.round(temp)}°C`;
  };