import React from 'react'
import './FormStyle.scss'

const Summary = ({formData}) => {
 const {title,file,description} = formData

 

  return (
    <div className='title-container'>
      <div className='title-summary'>{title}
    </div>
    
    <div className='description-container'>
      <p>{description}</p></div>
    <div> 
         
    </div>
    </div>
  )
}

export default Summary