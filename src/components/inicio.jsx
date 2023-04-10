import React from 'react'
import video from "../assets/video.mp4"
import direccion from "../assets/map.webp"
import SimpleSlider from './slide'



export const Inicio = () => {
  
  
  return (
    <div className='back1'>
        <SimpleSlider></SimpleSlider>
      <div>
        <video src={video} autoPlay muted loop className="video-bg"type='video/mp4'></video>
      </div>
      <div className='dir'>
        <div className='dir1'>
          <p className='map'>Donde encontrarnos?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa
             nulla architecto vero natus laudantium aperiam repellendus earum quia sint.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa
             nulla architecto vero natus laudantium aperiam repellendus earum quia sint.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa
             nulla architecto vero natus laudantium aperiam repellendus earum quia sint.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa
             nulla architecto vero natus laudantium aperiam repellendus earum quia sint.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa
             nulla architecto vero natus laudantium aperiam repellendus earum quia sint.
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae culpa
             nulla architecto vero natus laudantium aperiam repellendus earum quia sint.  
          </p>
        </div>
        <div>
          <img src={direccion}></img>
        </div>
        <div>

        </div>
      </div>
   
      
    </div>
  )
}
