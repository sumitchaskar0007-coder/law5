import React, { useEffect, useState } from "react";
import { careerAPI } from "../api";

const Career = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const res = await careerAPI.getAll();
      setCareers(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-center mb-10">
        Career Opportunities
      </h1>

      {careers.length === 0 && (
        <p className="text-center text-gray-500">
          No job openings available.
        </p>
      )}

      <div className="grid gap-6">

        {careers.map((job) => (
          <div
            key={job._id}
            className="border p-6 rounded-lg shadow hover:shadow-lg transition"
          >

            <h2 className="text-2xl font-bold">{job.position}</h2>

            <p className="text-gray-600">
              Department: {job.department}
            </p>

            <p className="text-gray-600">
              Location: {job.location}
            </p>

            <p className="mt-3 text-gray-700">
              {job.description}
            </p>

            <p className="mt-2 text-sm text-red-500">
              Apply before: {new Date(job.lastDate).toDateString()}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Career;