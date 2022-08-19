import React from 'react'
import './footer.css'
import { InstagramOutlined, LinkedinOutlined, FacebookOutlined, TwitterOutlined, GithubOutlined, CodepenCircleOutlined } from '@ant-design/icons';

const Period =  new Date().getFullYear();

function Footer() {
  return (
    <div className='foot'>
      <div className='socialMedia'>
        <a href="https://www.instagram.com/edgarsblog/" target={"blank"}><InstagramOutlined className='socialIcon ' /></a>
        <a href="https://www.linkedin.com/in/edgar-hvh-aa97b6200/" target={"blank"}><LinkedinOutlined className='socialIcon ' /></a>
        <a href="https://www.facebook.com/edx126" target={"blank"}><FacebookOutlined className='socialIcon '/></a>
        <a href="https://twitter.com/edgarsblog" target={"blank"}><TwitterOutlined className='socialIcon '   /></a> 
        <a href="https://github.com/Edgarsweb" target={"blank"}><GithubOutlined className='socialIcon ' /></a>
        <a href="https://codepen.io/Edgarweb" target={"blank"}><CodepenCircleOutlined className='socialIcon '/></a>
      </div>
        <p>Copyright {Period} Powered by <a href="https://edgarsblog.com/" target={"blank"}> Edgarsblog</a></p>
        
    </div>
  )
}

export default Footer