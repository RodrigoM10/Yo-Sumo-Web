import React, {useState} from 'react'
import './FormStyle.scss'

const Photo = ({formData,setFormData}) => {

  
  
  const uploadImage = async (e) => {
   const file = e.target.files[0]
    file.isUploading=true;
    setFormData({...formData,file} )
    console.log(file)
    
  }

  return (
    <div className='photo-container'>
      <input
      className='photo-input'
      type="file"
      files={formData.file}
      placeholder='Sube una foto'
      onChange={uploadImage}
      />
    </div>
  )
}

export default Photo