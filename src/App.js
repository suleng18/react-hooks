import { useEffect, useRef } from 'react';
import { actions, useStore } from './store';
import Video from './Video';

// Context
// 1. Create context
// 2. Provider
// 3. Consumer

function App() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div style={{ padding: '32px' }}>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}

export default App;
