"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import StoryCreation from "@/app/components/storycreation";

type StoryCardProps = {
  title: string;
  lastSaved: string;
};

const PopupContent: React.FC<{ close: () => void }> = ({ close }) => (
  <div className="text-xs">
    <button
      className="absolute block cursor-pointer px-1.5 py-0.5 leading-[20px] text-2xl bg-white border border-gray-300 rounded-full -right-2.5 -top-2.5"
      onClick={close}
    >
      &times;
    </button>
    <div className="w-full border-b border-gray-400 text-center text-lg p-1">
      {" "}
      Modal Title{" "}
    </div>
    <div className="w-full px-1.5 py-2.5">
      <StoryCreation />
    </div>
    <div className="w-full px-1.5 py-2.5 mx-auto text-center">
      <button
        className="button"
        onClick={() => {
          close();
        }}
      >
        Save and Close
      </button>
    </div>
  </div>
);

const storycard = ({ title, lastSaved }: StoryCardProps) => {
  return (
    <div
      className={`flex flex-row justify-between p-4 bg-white rounded-lg mb-4`}
    >
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{title}</p>
        <Popup
          trigger={
            <button className="text-blue-600 text-left hover:underline">
              Edit
            </button>
          }
          modal
          nested
        >
          {(close) => <PopupContent close={close} />}
        </Popup>
      </div>
      <div className="flex-col text-right">
        <p className="text-gray-500 block text-sm">Last saved: {lastSaved}</p>
        <button className="text-red-600 hover:underline">Delete</button>
      </div>
    </div>
  );
};

export default storycard;
