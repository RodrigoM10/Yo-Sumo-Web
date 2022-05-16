import React from 'react'
import './FormStyle.scss'


const Description = ({formData,setFormData}) => {
  return (
    <div className='description-container'>
      
        <textarea value={formData.description} placeholder="Coloque su decripcion" onChange={(e)=> setFormData({...formData, description: e.target.value})}>
          
        </textarea>
      
    </div>
    
  )
}

export default Description