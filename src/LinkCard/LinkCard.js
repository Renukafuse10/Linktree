import React from 'react'
import './LinkCard.css'
import twitter from './../Images/ImgTwitter.png'
import github from './../Images/ImgGithub.png'
import facebook from './../Images/ImgFacebook.png'
import instagram from './../Images/ImgInstagram.png'

const ImgMap={
  "twitter": twitter,
  "github": github,  
  "facebook": facebook,
  "instagram": instagram
}

function LinkCard(props) {
  return (
    <div className={`linkcard bg-${props.title}`}>
      <a href ={props.link} className="hyperlink">
      <div className="container-link-handle">
      <div>
      <img src={ImgMap[props.title]} className="card-img"/>
      </div>
     
      <div className="handle-name">
        <h3 className='username'>{props.username}</h3>
      </div>
      </div>
      <div className="handle-description">
        <p> {props.tagline}</p>
      </div>
     </a>
    </div>
  )
}

export default LinkCard