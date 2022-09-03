import React from 'react'
import  './boxCard.css'
import { Card } from 'antd';
import { TeamOutlined, VideoCameraOutlined, LikeOutlined } from '@ant-design/icons';

function BoxCard() {
  return (
    <div className='cardContainer'>
        <Card 
        style={{
        width: 300, 
      }}
    >
        <TeamOutlined className='userIcon'/>
        <h5>999+ Users</h5>
      <p>There are currently over 999 users worldwide who loves <b>Screenit app</b> . In fact, according to the latest worldwide statistics, about 2 percent of office workers use screen-recorders regularly.</p>
   
    </Card>

    <Card
      
        style={{
        width: 300,marginLeft: 20
      }}
    ><VideoCameraOutlined className='videoIcon'/>
    <h5>High-quality recorder</h5>
      <p>While recording a video of yourself, or the screen of your PC, you can feel the high quality and speed. <b>Screenit app</b> is a great helper tool in your projects</p>
      
    </Card>

    <Card
      
        style={{
        width: 300,marginLeft: 20
      }}
    ><LikeOutlined className='likeIcon'/>
    <h5>Absolutely free tool</h5>
      <p> <b>Screenit app</b>  is absolutely Free tool and you can use it as much as you want. It will help you in managing your tasks easier and faster.</p>
     
    </Card>
    </div>
  )
}

export default BoxCard