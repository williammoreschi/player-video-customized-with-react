import React, {useState, useRef, useEffect} from 'react';

import './assets/css/styles.css';
import imageUrl from  './assets/image/bunny.png';
import videoUrl from  './assets/video/mov_bbb.mp4';

const usePLayerState = ($videoPlayer) =>{
  const [playerState, setPlayerState] = useState({
    playing: false,
    percentage: 0,
    playBackRate: 1
  })

  useEffect(()=>{
    playerState.playing ? $videoPlayer.current.play() : $videoPlayer.current.pause();
  },[$videoPlayer, playerState.playing]);
  
  const toggleVideoPlay = ()=>{
    setPlayerState({
      ...playerState,
      playing: !playerState.playing
    })
  }

  const handleTimeUpdate = ()=>{
    const currentPercent = ($videoPlayer.current.currentTime / $videoPlayer.current.duration) * 100;
    setPlayerState({
      ...playerState,
      percentage:currentPercent
    });
  }

  const handleVideoChangePercentage = (event) => {
    const currentPercentValue = event.target.value;
    $videoPlayer.current.currentTime = ($videoPlayer.current.duration / 100) * currentPercentValue;
    setPlayerState({
      ...playerState,
      percentage:currentPercentValue
    });
  }

  const handleVideoChangePlayBackRate = (event) =>{
    const currentPlaybackRate = event.target.value;
    console.log(currentPlaybackRate);
    console.log(currentPlaybackRate);
    $videoPlayer.current.playbackRate = Number(currentPlaybackRate);
    setPlayerState({
      ...playerState,
      playBackRate:currentPlaybackRate
    })
  }

  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleVideoChangePercentage,
    handleVideoChangePlayBackRate
  }
}

function App() {
  const $videoPlayer = useRef(null);
  const {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleVideoChangePercentage,
    handleVideoChangePlayBackRate
  } = usePLayerState($videoPlayer);
  return (
    <div className="videoWrapper" >
      <video
      ref={$videoPlayer}
      poster={imageUrl}
      onTimeUpdate={handleTimeUpdate}
      onClick={toggleVideoPlay}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="controls">
        <button onClick={toggleVideoPlay} >
          {playerState.playing ? 'Pause' : 'Play'}
        </button>
        <input
        type="range"
        min="0"
        max="100"
        onChange={handleVideoChangePercentage}
        value={playerState.percentage}
        />
        <select
        onChange={handleVideoChangePlayBackRate}
        defaultValue={playerState.playBackRate}
        >
          {[0.25,0.5,0.75,1,2,3].map(speed => (
            <option key={speed} value={speed}>{speed}</option>
            )
          )}
        </select>
      </div>
    </div>
  );
}

export default App;
