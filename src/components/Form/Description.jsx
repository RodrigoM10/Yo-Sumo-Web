import React from 'react'
import './FormStyle.scss'


const Description = ({formData,setFormData}) => {
  return (
    <div className='description-container'>
        <input type="text" placeholder='Describa su peticion...' value={formData.description} onChange={(e)=> setFormData({...formData, description: e.target.value})}/>
    </div>
  )
}

export default Description