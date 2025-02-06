import React from "react";
import StoryCard from "@/app/components/storycard";

const UserHome = () => {
  const stories = [
    { title: "Test Story", lastSaved: "2021-10-01" },
    { title: "Another Story", lastSaved: "2021-10-02" },
    {
      title: "A Really Long Story just for the funnies",
      lastSaved: "2021-10-02",
    },
    { title: "Short Story", lastSaved: "2021-10-03" },
  ];

  return (
    <div className="min-h-screen bg-gray-500">
      <main className="p-6 max-w-4xl mx-auto">
        {stories.map((story, index) => (
          <StoryCard
            key={index}
            title={story.title}
            lastSaved={story.lastSaved}
          />
        ))}
      </main>
    </div>
  );
};

export default UserHome;
