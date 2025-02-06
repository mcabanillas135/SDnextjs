import React from "react";
import { FaSave, FaFolderOpen, FaBox, FaCog, FaMap } from "react-icons/fa";

const sidebar = () => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:w-1/4">
      <div className="flex sm:hidden justify-around">
        <button className="p-2 text-gray-300 hover:text-white">
          <FaSave size={24} />
        </button>
        <button className="p-2 text-gray-300 hover:text-white">
          <FaFolderOpen size={24} />
        </button>
        <button className="p-2 text-gray-300 hover:text-white">
          <FaBox size={24} />
        </button>
        <button className="p-2 text-gray-300 hover:text-white">
          <FaCog size={24} />
        </button>
        <button className="p-2 text-gray-300 hover:text-white">
          <FaMap size={24} />
        </button>
      </div>
      <div className="hidden sm:flex flex-col gap-2">
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded flex items-center gap-2">
          <FaSave /> Save
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded flex items-center gap-2">
          <FaFolderOpen /> Load
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded flex items-center gap-2">
          <FaBox /> Inventory
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded flex items-center gap-2">
          <FaCog /> Settings
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded flex items-center gap-2">
          <FaMap /> Map
        </button>
      </div>
    </div>
  );
};

export default sidebar;
