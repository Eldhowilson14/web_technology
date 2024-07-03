import React, { useEffect, useState } from "react";
import AluminiCard from "./AluminiCard";
import axios from "axios";
import LoadingButton from "../ui/custom/LoadingButton";

const Alumini = () => {
  const [loading, setLoading] = useState(true);
  const [aluminiData, setAluminidata] = useState({});
  useEffect(() => {
    axios
      .get("/api/v1/users/alumini")
      .then((resData) => {
        console.log(resData);
        setAluminidata(resData.data.data);
      })
      .finally(() => setLoading(false));
  }, []);
  return !loading ? (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="">
            <h2 className="text-3xl font-bold text-center uppercase text-[#444] ">
              Alumini Network
            </h2>
            <p className="block text-base text-center py-3 text-[#444444] font-[400]">
              Connect with your alumini and make good connection with chat
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {aluminiData.map((alumini, index) => (
              <AluminiCard key={index} alumini={alumini} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>
      <LoadingButton />
    </h1>
  );
};

export default Alumini;
