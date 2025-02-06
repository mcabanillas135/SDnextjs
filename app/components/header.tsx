import React from "react";

const header = () => {
  return (
    <div className="flex items-center justify-between p-4 px-4 py-2 bg-gray-800 text-white">
      <div className="flex-1">
        <button className="text-xl font-bold">Story Forge</button>
      </div>
      <div className="text-right">
        <button className="block text-sm text-yellow-500">Log in</button>
      </div>
    </div>
  );
};

export default header;
