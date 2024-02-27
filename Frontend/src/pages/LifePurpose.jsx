import { useState } from "react";
import axios from "axios";
import { Interpretation } from "../components";
import calculateAge from "../utils/ageCalculator";

function LifePurpose() {
  const [birthDate, setBirthDate] = useState("");
  const [data, setData] = useState(null);

  const age = calculateAge(birthDate);

  const analyzeName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/life-purpose?date_of_birth=${birthDate}`
      );
      setData(response?.data?.data);
    } catch (error) {
      console.log("Error Fetching Data", error);
    }
  };
  return (
    <div className="p-4 bg-[#242424] min-h-screen h-auto w-full flex justify-center items-center text-center">
      <div className="flex-col px-2 sm:px-20 w-full sm:w-10/12">
        <h1 className="text-5xl sm:text-7xl font-bold text-white">
          Your Root and Destiny Numbers
        </h1>

        {/* Info Div */}
        <div className="text-white font-thin mt-10 text-center">
          <p className="mb-4">
            <span className="font-semibold text-blue-400">Root Number: </span>{" "}
            It's your intrinsic nature that you are born with.
          </p>
          <p className="mb-4">
            <span className="font-semibold text-blue-400">
              Destiny Number:{" "}
            </span>{" "}
            It's the thing that your are meant to become in this life.
          </p>
          <p>
            <span className="font-semibold text-blue-400">Life Purpose: </span>{" "}
            It's your journey from your Root number to your Destiny number.
          </p>
        </div>

        {/* Input Div */}
        <div className="mt-10 mb-10 flex justify-center items-center text-2xl sm:mx-10">
          <input
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            type="text"
            placeholder="DD-MM-YYYY"
            className="px-4 py-2 outline-none rounded-l-full sm:w-10/12"
          />
          <button
            onClick={analyzeName}
            className="px-6 py-2 bg-gray-400 rounded-r-full hover:bg-gray-500"
          >
            Go
          </button>
        </div>

        {/* Result Div */}
        {data && (
          <div className="flex flex-col items-center justify-center gap-4 text-white text-xl">
            <div className="mb-8">
              <p className="text-2xl font-semibold">
                Your Root Number is:{" "}
                <span className="text-blue-400 ">{data?.root_number}</span>
              </p>
              <p className="text-2xl font-semibold">
                Your Destiny Number is:{" "}
                <span className="text-blue-400">{data?.destiny_number}</span>
              </p>
            </div>
            {age && (
              <div className="mb-4">
                <p className="text-4xl font-semibold">
                  {" "}
                  <span className="py-4 px-4 rounded-full shadow-inner shadow-green-500">
                    {age}
                  </span>{" "}
                  years old
                </p>
              </div>
            )}
            <div className="w-full border border-white rounded-lg p-4 flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2">
                <h2 className="text-lg font-semibold mb-4 flex  justify-center gap-2 items-center">
                  Who You Are:{" "}
                  <span className="text-blue-400 text-3xl px-2 sm:px-2 rounded-full shadow-inner shadow-blue-500">
                    {data?.root_number}
                  </span>{" "}
                </h2>
                <Interpretation data={data?.interpretation_root} />
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-lg font-semibold mb-4 flex  justify-center gap-2 items-center">
                  Who You Are Meant to Become:{" "}
                  <span className="text-blue-400 text-3xl px-2 sm:px-2 rounded-full shadow-inner shadow-blue-500">
                    {data?.destiny_number}
                  </span>
                </h2>
                <Interpretation data={data?.interpretation_destiny} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LifePurpose;
