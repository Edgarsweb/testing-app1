import React from 'react';
import './screenShot.css'
import { useReactMediaRecorder } from "react-media-recorder";


// import { BsStopBtn, BsCollectionPlayFill } from 'react-icons/fa';
import { PlayCircleFilled, MinusCircleFilled} from '@ant-design/icons';

function ScreenShot() {
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true, video: true });

  return (
    <div className='container'>
      {/* <p>{status}</p> */}
      <h2>Try Me</h2>
      <video className='videoContainer' src={mediaBlobUrl} controls autoPlay loop /> 
      <PlayCircleFilled  className='playCircle' onClick={startRecording} /> 
      <MinusCircleFilled className='playCircle' onClick={stopRecording} /> 

      
    </div>
  );
}

export default ScreenShot;