import React from 'react'
import './/spinner.css';
import { cardItem } from './data';

function Spinner(props) {
  
  return (
    <div className='tournamentItemCard'>      
      <p className='verticalText'>
        Registering
      </p>

     

      <div>
      {
          cardItem.map((data, key) => { return <div className='leftSide' key={key}  >
            <div className='pushPinData'>
              <span>&#128204;</span> 
              <p className='nums'>{props.nums}</p>              
            </div>

            <div className='tournamentName'>
              <h2>{props.tournamentName}</h2>
            </div>

            <div className='date'>
              <span>&#128337;</span>
              <p>{data.date}</p>
            </div>
            
        </div>
        
      
      })
          }
      </div>

      <div>
      
            <button className='btn'>
              {props.button}                          
            </button>
            
            <div className='quantityCupData'>
            <div className='quantity'>
              <span>&#128100;</span>
              <p>{props.quantity}</p>
            </div>
            <div className='cup'>
              <span>&#127942;</span>
              <p>{props.cup}</p>
            </div>              
            </div>           
        
      </div>
      
             
          
          
        
        
    
       
         

        

        
        

          
  
          
     

      

     

      

    </div>
  )
}

export default Spinner