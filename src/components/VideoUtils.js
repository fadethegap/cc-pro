import React from "react";

export const VideoIframe = ({ videoSrcURL, videoTitle }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);
// export default VideoIframe;

export const Video = ({
  videoSrcURL,
  videoType,
  playFunction,
  pauseFunction,
  classesToApply,
}) => (
  <>
    <video
      onMouseEnter={playFunction}
      onMouseLeave={pauseFunction}
      src={videoSrcURL}
      type={videoType}
      loop
      className={classesToApply}
      muted
    >
      <track
        src="captions_en.vtt"
        kind="captions"
        srcLang="en"
        label="english_captions"
      ></track>
    </video>
  </>
);
