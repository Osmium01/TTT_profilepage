import React from 'react'

const Bio = (props) => {
  const {instaUrl, designationd} = props.data;
  return (
    <div className='mainbio' >
            <div className="founder">{designationd}</div>
            <div className="link"> {instaUrl} </div>
            <div className="rating">
         <img src="star.jpg" className='diamond r' alt="Logo" />
         <span className="gap">125</span>
         
         <img src="thumb.png" className='diamond r' alt="Logo" />
         <span className="gap">12</span>
         
         <img src="eye.jpg" className='diamond r'  alt="Logo" />

         <span className="gap">57.8k</span>

         <img src="heart.png" className='diamond r' alt="Logo" />

         <span className="gap">26.0k</span>

            </div>
    </div>
  )
}

export default Bio