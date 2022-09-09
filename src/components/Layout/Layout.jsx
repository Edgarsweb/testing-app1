import React from 'react'
import "./layout.css"
import ScreenShot from '../ScreenShot/ScreenShot'
import Footer from '../Footer/Footer'
import Client from "../../Client.png";
import happyClients from "../../happyClients.png";
import BoxCard from '../boxCards/BoxCard';






function Layout() {
  return (
    <div>
        <div className='waveEffect'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2ec4b6" fillOpacity="1" d="M0,64L26.7,101.3C53.3,139,107,213,160,208C213.3,203,267,117,320,112C373.3,107,427,181,480,208C533.3,235,587,213,640,202.7C693.3,192,747,192,800,213.3C853.3,235,907,277,960,272C1013.3,267,1067,213,1120,170.7C1173.3,128,1227,96,1280,117.3C1333.3,139,1387,213,1413,250.7L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </div>
      <div className='mainDiv'>

      <h1>This is the App, You've been looking for</h1>
      <div className='firstImage'>
      <img src={Client} alt="" />
      </div>
      
      
      <ScreenShot />
      <div className='secondImage'>
        <img src={happyClients} alt="" />
      </div>
      
      <BoxCard />
      {/* <hr style={{maxWidth: 600}}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod explicabo dolor modi nihil nostrum laborum, quibusdam reprehenderit quia tempore tenetur nisi. Placeat adipisci repellat blanditiis facere sit qui sequi?</p> */}
      <hr style={{maxWidth: 600}}/>

      <div className='review'>
        <q> <i>This is the coolest and most simple screen recorder I have tested.</i>  </q>
        <p style={{fontSize: 12}}>Jonathan Brandon, CEO of Think2ce</p>
      </div>

      <a href="https://www.buymeacoffee.com/edx126" target={"blank"} className="buyCoffee"><button className='donateButton'>Buy me a coffee</button></a>

      </div>
      

      <Footer />
    </div>
  )
}

export default Layout