import React, { useState } from "react";
import { PlayIcon } from "./ImageWithBadge/play-icon";
import { StopIcon } from "./ImageWithBadge/stop-icon";

type AudioPlayerProps = {
  src: string;
  isPlaying: boolean;
  onStop: () => void;
  onPlay: () => void;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  isPlaying,
  onStop,
  onPlay,
}) => {

  const handlePlay = () => {
    if (!isPlaying) {
      onStop();
      onPlay();
    }
  };

  const handleStop = () => {
    if (isPlaying) {
      onStop();
    }
  };


  return (
    <span>
      {!isPlaying ? (
        <button onClick={handlePlay}><PlayIcon className="w-[10px] fill-accent mr-2" /></button>
      ) : (
        <button onClick={handleStop}><StopIcon className="w-[10px] fill-accent mr-2" /></button>
      )}
      <audio src={src} autoPlay={isPlaying} />
    </span>
  );
};

export default AudioPlayer;
