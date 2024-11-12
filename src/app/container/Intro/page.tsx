"use client";
import { useRef, useState } from "react";
import "./Intro.css";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const Page = () => {
  const [videoPlay, setVideoPlay] = useState(false);

  const vidRef = useRef<HTMLVideoElement | null>(null);

  const handleVideo = () => {
    setVideoPlay(!videoPlay);
    if (vidRef.current) {
      if (videoPlay) {
        vidRef.current.pause();
      } else {
        vidRef.current.play();
      }
    }
  };
  return (
    <div className="app__video">
      <div>
        <video 
        src="/video.mp4"
        loop
        muted
        ref={vidRef} 
        controls={false}
         />

        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {videoPlay ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
