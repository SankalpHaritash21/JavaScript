import { useState } from "react";

const country = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pak",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dahak", "Chittagong"],
  },
];

function App() {
  //state to store value of country
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [selectedCity, setSelectedCity] = useState(0);

  const selectedCities = country[selectedCountry].cities;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-purple-400 flex justify-evenly">
        {/* 1st dropdown for selecting the country */}
        <select
          className="border-2 border-black"
          onChange={(e) => {
            const selectedIndex = e.target.value;
            setSelectedCountry(selectedIndex);
            // Reset selected city when country changes
            setSelectedCity(0);
          }}
          value={selectedCountry}
        >
          {country.map((item, index) => (
            <option key={index} value={index}>
              {item.name}
            </option>
          ))}
        </select>

        {/* 2nd dropdown for selecting the city */}
        <select
          className="border-2 border-black"
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        >
          {selectedCities.map((item, index) => (
            <option key={index} value={index} className="w-32">
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
