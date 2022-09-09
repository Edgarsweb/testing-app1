import React from 'react';
import './screenShot.css'
// 



import { BsStopBtn, BsCollectionPlayFill } from 'react-icons/fa';
import { PlayCircleFilled, MinusCircleFilled} from '@ant-design/icons';





 



function ScreenShot() {
  const start = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia(
      {
      video:{
      mediaSource: "screen",
      // width: 1200,
      // height: 800,
      
      }
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

  return (
    <div className='container'>
      <div className='videoContainer '>
        <video controls audio>Play</video>
      </div>
      <PlayCircleFilled onClick={start} className="playCircle"/>
      <MinusCircleFilled className="stopRecBtn" />


      
    </div>
  );
}

export default ScreenShot;