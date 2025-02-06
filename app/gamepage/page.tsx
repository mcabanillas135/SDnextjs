import React from "react";
import Chatbox from "@/app/components/chatbox";
import Sidebar from "@/app/components/sidebar";

const gamepage = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-900 text-gray-300 p-4">
      <Sidebar />
      <Chatbox />
    </div>
  );
};

export default gamepage;
