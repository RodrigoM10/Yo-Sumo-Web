import React, {useState} from 'react'
import './FormStyle.scss'

const Photo = () => {
  const [image,setImage] = useState('')

  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file',files[0])
    data.append('upload_preset','darwin')
  }

  return (
    <div className='photo-container'>
      <input
      type="file"
      name="file"
      placeholder='Sube una foto'
      onChange={uploadImage}
      />
    </div>
  )
}

export default Photo