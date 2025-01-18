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
    // Calculate Glorious Years dynamically
    const currentYear = new Date().getFullYear();
    const gloriousYears = currentYear - 2016;

    // Increment for "Glorious Years"
    const incrementYears = () => {
      let start = 0;
      const end = gloriousYears;
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
      <div className="py-16  text-[#1A1A37]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Experience by the Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Years in Business */}
            <div>
              <h3 className="text-5xl font-bold">{years}+</h3>
              <p className="mt-2">Glorious Years</p>
            </div>

            {/* Successful Projects */}
            <div>
              <h3 className="text-5xl font-bold">{projects}+</h3>
              <p className="mt-2">Completed Projects</p>
            </div>

            {/* Strong Team */}
            <div>
              <h3 className="text-5xl font-bold">{team}+</h3>
              <p className="mt-2">Team Members</p>
            </div>

            {/* Offices Nationwide */}
            <div>
              <h3 className="text-5xl font-bold">{offices}+</h3>
              <p className="mt-2">Offices Nationwide</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterIncrement;
