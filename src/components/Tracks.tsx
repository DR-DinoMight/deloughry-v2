import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "./AudioPlayer";

type TracksProps = {
  tracks: Array<any>;
};

const Tracks: React.FC<TracksProps> = ({
  tracks
}) => {
  const [currentPlayingTrack, setcurrentPlayingTrack] = useState<string | null>(
    null
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (src: string) => {
    if (currentPlayingTrack !== null) {
      const currentAudio = audioRef.current;
      if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
    }
    const newAudio = new Audio(src);
    newAudio.play();
    setcurrentPlayingTrack(src);
    audioRef.current = newAudio;
  };

  const handleStop = () => {
    if (currentPlayingTrack !== null) {
      const currentAudio = audioRef.current;
      if (currentAudio !== null) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      setcurrentPlayingTrack(null);
    }
  };

  useEffect(() => {
    const currentAudio = audioRef.current;
    if (currentAudio !== null) {
      currentAudio.addEventListener("ended", handleStop);
      return () => {
        currentAudio.removeEventListener("ended", handleStop);
      };
    }
  }, [currentPlayingTrack, handleStop]);

  return (
    <ol>
      {
        tracks.map((track, index) => (
          <li className="flex flex-row gap-1 flex-wrap mb-2 align-middle">
            <span>{index + 1}.</span>
            {track.previewUrl && (
              <AudioPlayer
                key={track.id}
                id={track.id}
                src={track.previewUrl}
                isPlaying={currentPlayingTrack === track.previewUrl}
                onPlay={() => handlePlay(track.previewUrl)}
                onStop={handleStop} />
            )}
            <a href={track.externalUrl} className="text-accent hover:text-link" title="View Track in Spotify" target="_BLANK">{track.name}</a> -
            <span className="text-xs"> {track.artists.join(', ')}</span>
          </li>
        ))
      }
    </ol >
  );
};

export default Tracks;
