import { forwardRef, useImperativeHandle, useRef } from 'react';
import video1 from './video/dung_do.mp4';

function Video(props, ref) {
  const videoRef = useRef();
  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} width={400} src={video1}></video>;
}

export default forwardRef(Video);
