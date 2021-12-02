import React, { useState } from "react";
import { Video } from "../components/VideoUtils";

export default function Asset({ asset }) {
  const [videoUrl] = useState(asset.asset.video.mp4Url);
  const [authorName] = useState(asset.contributor.name);
  const [assetTitle] = useState(asset.assetTitle);

  function play(e) {
    e.target.play();
  }
  function pause(e) {
    e.target.pause();
  }

  return (
    <div className="p-5">
      <Video
        videoSrcURL={videoUrl}
        videoType="video/mp4"
        playFunction={play}
        pauseFunction={pause}
        classesToApply="clip rounded-t-xl"
      />

      <div className="relative bg-gray-800 rounded-b-xl h-16">
        <div className="absolute top-3 left-2 text-sm font-medium text-blue-100">
          {assetTitle}
        </div>
        <div className="absolute bottom-3 left-2 text-xs font-light text-blue-100">
          By {authorName}
        </div>
        <div className="absolute bottom-4 right-4 text-xs font-light text-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
