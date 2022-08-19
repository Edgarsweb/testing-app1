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
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum porro hic maxime sapiente praesentium quidem nisi ratione nobis possimus provident molestias ipsa id iure, distinctio quos nostrum, eaque, voluptates ab.</p>
   
    </Card>

    <Card
      
        style={{
        width: 300,marginLeft: 20
      }}
    ><VideoCameraOutlined className='videoIcon'/>
    <h5>High-quality recorder</h5>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum porro hic maxime sapiente praesentium quidem nisi ratione nobis possimus provident molestias ipsa id iure, distinctio quos nostrum, eaque, voluptates ab.</p>
      
    </Card>

    <Card
      
        style={{
        width: 300,marginLeft: 20
      }}
    ><LikeOutlined className='likeIcon'/>
    <h5>Absolutely free tool</h5>
      <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum porro hic maxime sapiente praesentium quidem nisi ratione nobis possimus provident molestias ipsa id iure, distinctio quos nostrum, eaque, voluptates ab. </p>
     
    </Card>
    </div>
  )
}

export default BoxCard