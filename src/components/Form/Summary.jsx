import React from 'react'
import './FormStyle.scss'

const Summary = ({formData}) => {
 const {title,
        photo,
        description,
        name,
        cellphone,
        email
      } = formData

  return (
    <div className='title-container'>
    <div className='title-summary'>{title}</div>
    <div>{photo}</div>
    <div className='description-container'>
      <p>{description}</p></div>
    <div>{name}, {cellphone}, {email}</div>
    
    </div>
  )
}

export default Summary