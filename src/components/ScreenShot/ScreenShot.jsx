import React from 'react';
import './screenShot.css'
import { useReactMediaRecorder } from "react-media-recorder";


import { BsStopBtn, BsCollectionPlayFill } from 'react-icons/fa';
import { PlayCircleFilled, MinusCircleFilled} from '@ant-design/icons';



  const start = async () => {
	const stream = await navigator.mediaDevices.getDisplayMedia(
    
    
	  {
	  video:{
		mediaSource: "screen",
	  },
    
	});

	const data=[];
  const mediaRecorder=new MediaRecorder(stream);

  mediaRecorder.ondataavailable=(e)=>{
	data.push(e.data);
  };

  mediaRecorder.start();
  mediaRecorder.onstop=(e)=>{
	
	document.querySelector("video").src=URL.createObjectURL(
	  new Blob(data,{
		type:data[0].type,
	  })
	);
  };
  };

 



function ScreenShot() {
//     const { status, startRecording, stopRecording, mediaBlobUrl } =
//     useReactMediaRecorder({ screen: true, video: true });

  return (
    <div className='container'>
      <div className='videoBox'>
        <video  controls>Play</video>
      </div>
      <PlayCircleFilled className='playCircle' onClick={start} />
      {/* <button  onClick={start}>Start rec</button>
      <button onClick={start}>Start rec</button> */}

      
    </div>
  );
}

export default ScreenShot;