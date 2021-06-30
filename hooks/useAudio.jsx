import { useState, useEffect } from 'react';

const useAudio = url => {
  const [ audio ] = useState(typeof Audio != 'undefined' ? new Audio('/audio/back_sound.mp3') : null);
  const [ playing, setPlaying ] = useState(false);

  const togglePlayPause = () => setPlaying(!playing);
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(true));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(true));
    };
  }, []);

  return [playing, togglePlayPause];
};

export default useAudio;