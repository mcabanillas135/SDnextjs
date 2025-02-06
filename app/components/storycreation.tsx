import React from "react";

const storycreation = () => {
  return (
    <div className="bg-gray-200 p-2 rounded-lg shadow-lg flex flex-row">
      <div className="basis-1/2 p-2">
        <div className="mb-4">
          <label
            htmlFor="storyName"
            className="block text-gray-700 font-semibold"
          >
            Story Name
          </label>
          <input
            id="storyName"
            type="text"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="system" className="block text-gray-700 font-semibold">
            System
          </label>
          <select
            id="system"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          >
            <option value="">Select a system</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="slider" className="block text-gray-700 font-semibold">
            Slider
          </label>
          <input
            id="slider"
            type="range"
            min="0"
            max="10"
            className="w-full mt-2 accent-red-500"
          />
        </div>
      </div>
      <div className="basis-1/2 p-2">
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-semibold"
          >
            Description
          </label>
          <textarea
            id="description"
            //   rows="4"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="setting"
            className="block text-gray-700 font-semibold"
          >
            Setting
          </label>
          <textarea
            id="setting"
            //   rows="4"
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default storycreation;
