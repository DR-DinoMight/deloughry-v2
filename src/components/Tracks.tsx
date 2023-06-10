import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "./AudioPlayer";
import type { TrackWithAllRelationships } from "@/lib/types/spotify";


type TracksProps = {
  tracks: TrackWithAllRelationships[] | [];
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
          <li className="flex flex-row justify-between" key={track.id}>
            <a className={`flex flex-row gap-1 flex-wrap mb-2 align-middle ${currentPlayingTrack === track.previewUrl ? 'text-link' : 'cactus-link'} no-underline`} href={track.externalUrl} title="View Track in Spotify" target="_BLANK">
              <span>{index + 1}.</span>
              <div className="flex flex-col flex-wrap flex-1">
                <span>{track.name}</span>
                <span className="text-xs text-textColor"> {track.artists.map(artist => artist.name).join(', ')}</span>
              </div>
            </a>
            {track.previewUrl && (
              < AudioPlayer
                key={track.id}
                src={track.previewUrl}
                isPlaying={currentPlayingTrack === track.previewUrl}
                onPlay={() => handlePlay(track.previewUrl ?? "")}
                onStop={handleStop} />
            )}
          </li>
        ))
      }
    </ol >
  );
};

export default Tracks;
