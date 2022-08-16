import React from 'react'
import './/playerInfo.css';
import closedEye from "../../closed-eyes.png";
import { playerData } from './data';


function PlayerInfo(props) {
  return (
    <>             
        
        {
          playerData.map((data, key) => { return <div className='playerInfoContainer' key={key}  > 
          <div>
                <p className='userName'>{props.userName}</p>
                <span className='stars'>⭐⭐⭐⭐⭐</span>
          </div>

          <div className='playerFace'>
            <img src={data.url} /> 
          </div>

          <div className='closedEye'>
                <img src={closedEye} alt="" />
          </div>

          <p className='earnedMoney'>{data.earnedMoney}</p>
                


        </div>  })
            
            
      }
      
    </>
  )
}

export default PlayerInfo