import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState('');

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(`https://wttr.in/${city}?format=3`);
      const data = await response.text();
      setWeather(data);
    } catch (error) {
      setWeather("Error fetching weather.");
    }
  };

  return (
    <div>
      <h1 className="text-center text-3xl text-blue-700">Weather Forecast</h1>
      <div className="box w-full p-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full placeholder:text-green-500 hover:placeholder:text-red-400 p-2 border rounded"
        />
        <button
          className="mt-2 bg-blue-700 text-white p-2 rounded-lg shadow-lg hover:ring-4"
          onClick={getWeather}
        >
          Search
        </button>
        <p className="mt-4 text-lg text-gray-700">{weather}</p>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('react-app'));
