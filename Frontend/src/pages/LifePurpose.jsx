import { useState } from "react";
import axios from "axios";
import { Interpretation } from "../components";

function LifePurpose() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const analyzeName = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/life-purpose?date_of_birth=${name}`
      );
      console.log("root_number = ", response?.data?.data?.root_number);
      setData(response?.data?.data);
    } catch (error) {
      console.log("Error Fetching Data", error);
    }
  };
  return (
    <div className="p-4 bg-[#242424] h-screen w-full flex justify-center items-center text-center">
      <div className="flex-col px-20 w-8/12">
        <h1 className="text-7xl font-bold text-white">
          Your Root and Destiny Numbers
        </h1>

        {/* Info Div */}
        <div className="text-white font-thin mt-10 text-center">
          <p>
            <span className="font-semibold">Root Number: </span> It's your
            intrinsic nature that you are born with.
          </p>
          <p>
            {" "}
            <span className="font-semibold">Destiny Number: </span>It's the
            thing that your are meant to become in this life.
          </p>
        </div>

        {/* Input Div */}
        <div className="mt-10 mb-10 flex justify-center items-center text-2xl sm:mx-10">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="DD-MM-YYYY"
            className="px-4 py-2 outline-none rounded-l-full sm:w-10/12"
          />
          <button
            onClick={analyzeName}
            className="px-4 py-2 bg-gray-400 rounded-r-full hover:bg-gray-500"
          >
            Go
          </button>
        </div>

        {/* Result Div */}
        {data && (
          <div className="flex flex-col justify-center items-center gap-4 text-center text-white text-xl">
            <p>
              Your Root Number is:{" "}
              <span className="font-medium text-2xl">{data?.root_number}</span>
            </p>
            <p>
              Your Destiny Number is:{" "}
              <span className="font-medium text-2xl">
                {data?.destiny_number}
              </span>
            </p>

            <div className="mt-4 w-full border border-white">
              <h1 className="font-semibold my-4">Your Number Analysis:</h1>
              <div className="flex gap-2">
                <div className="border border-white rounded-lg p-4 w-1/2">
                  <h1 className="font-medium my-1">
                    Who You are: <span>{data?.root_number}</span>
                  </h1>
                  <Interpretation data={data?.interpretation_root} />
                </div>
                <div className="border border-white rounded-lg p-4 w-1/2">
                  <h1 className="font-medium my-1">
                    What you are meant to become:{" "}
                    <span>{data?.destiny_number}</span>
                  </h1>
                  <Interpretation data={data?.interpretation_destiny} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LifePurpose;
