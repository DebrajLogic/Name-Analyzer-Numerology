import React from "react";

function Interpretation({ data }) {
  const number = {
    lord: data?.lord,
    favourable_dates: data?.favourable_dates,
    details: data?.details,
    characteristics: data?.characteristics,
    precautions: data?.precautions,
    lucky_colors: data?.lucky_colors,
    lucky_gemstone: data?.lucky_gemstone,
    mantra: data?.mantra,
    recommendations: data?.recommendations,
    favourable_professions: data?.favourable_professions,
    probable_diseases: data?.probable_diseases,
  };

  return (
    <div className="w-full bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-lg font-bold mb-4 text-white">
        Number Interpretation
      </h2>
      <div className="grid grid-cols-2 gap-4 text-white">
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Lord:</p>
          <p className="text-blue-400 font-light text-sm">{number?.lord}</p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Favourable Dates:</p>
          <p className="text-blue-400 font-light text-sm">
            {number?.favourable_dates}
          </p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Details:</p>
          <p className="text-blue-400 font-light text-sm">{number?.details}</p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Characteristics:</p>
          <ul className="list-disc ml-4">
            {number?.characteristics &&
              number.characteristics.map((item, index) => (
                <li key={index} className="text-blue-400 font-light text-xs">
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Precautions:</p>
          <ul className="list-disc ml-4">
            {number?.precautions &&
              number.precautions.map((item, index) => (
                <li key={index} className="text-blue-400 font-light text-xs">
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Lucky Colors:</p>
          <p className="text-blue-400 font-light text-sm">
            {number?.lucky_colors}
          </p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Lucky Gemstone:</p>
          <p className="text-blue-400 font-light text-sm">
            {number?.lucky_gemstone}
          </p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Mantra:</p>
          <p className="text-blue-400 font-light text-sm">{number?.mantra}</p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Recommendations:</p>
          <ul className="list-disc ml-4">
            {number?.recommendations &&
              number.recommendations.map((item, index) => (
                <li key={index} className="text-blue-400 font-light text-xs">
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Favourable Professions:</p>
          <p className="text-blue-400 font-light text-sm">
            {number?.favourable_professions}
          </p>
        </div>
        <div className="mb-4 col-span-2">
          <p className="text-gray-400 mb-2 text-sm">Probable Diseases:</p>
          <p className="text-blue-400 font-light text-sm">
            {number?.probable_diseases}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Interpretation;
