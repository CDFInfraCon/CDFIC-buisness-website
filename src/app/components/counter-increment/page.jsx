"use client";
import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaAward,
  FaBuilding,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";

const CounterIncrement = () => {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [team, setTeam] = useState(0);
  const [offices, setOffices] = useState(0);
  useEffect(() => {
    // Increment for "Glorious Years"
    const incrementYears = () => {
      let start = 0;
      const end = 24;
      const duration = 2000;
      const incrementTime = duration / end;

      const increment = () => {
        start += 1;
        setYears(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    // Increment for "Successful Projects"
    const incrementProjects = () => {
      let start = 0;
      const end = 170;
      const duration = 2000;
      const incrementTime = duration / end;

      const increment = () => {
        start += 1;
        setProjects(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    // Increment for "Strong Team"
    const incrementTeam = () => {
      let start = 0;
      const end = 2000;
      const duration = 2000;
      const incrementTime = duration / (end / 100);

      const increment = () => {
        start += 20;
        setTeam(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    // Increment for "Offices Nationwide"
    const incrementOffices = () => {
      let start = 0;
      const end = 38;
      const duration = 2000;
      const incrementTime = duration / end;

      const increment = () => {
        start += 1;
        setOffices(start);
        if (start < end) {
          setTimeout(increment, incrementTime);
        }
      };

      increment();
    };

    incrementYears();
    incrementProjects();
    incrementTeam();
    incrementOffices();
  }, []);

  return (
    <>
      <div className="py-16 bg-gray-800 mt-10">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-5">
            {/* Card 1 */}
            <div
              className="bg-indigo-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl"
              data-aos="zoom-in"
              // data-aos="flip-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <div>
                <div className="text-3xl font-bold">{years}</div>
                <div className="text-sm">Glorious Years</div>
              </div>
              <FaAward className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>

            {/* Card 2 */}
            <div
              className="bg-blue-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div>
                <div className="text-3xl font-bold">{projects}</div>
                <div className="text-sm">Successful Projects</div>
              </div>
              <FaProjectDiagram className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>

            {/* Card 3 */}
            <div
              className="bg-green-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div>
                <div className="text-3xl font-bold">{team}</div>
                <div className="text-sm">Strong Team</div>
              </div>
              <FaUsers className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>

            {/* Card 4 */}
            <div
              className="bg-orange-500 text-white p-6 rounded-lg shadow-md flex items-center justify-between transform transition-transform duration-300 ease-in-out hover:translate-y-[-10px] hover:shadow-xl"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <div>
                <div className="text-3xl font-bold">{offices}</div>
                <div className="text-sm">Offices Nationwide</div>
              </div>
              <FaBuilding className="text-7xl bg-blue-600 p-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterIncrement;
