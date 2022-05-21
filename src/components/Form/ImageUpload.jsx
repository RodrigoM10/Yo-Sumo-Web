import React, {useState,useRef,useEffect} from 'react'
import './FormStyle.scss'

const ImageUpload = ({formData,setFormData}) => {
  
  const [file,setFile] = useState()
  const filePickerRef = useRef()
  const [previewUrl,setPreviewUrl] = useState()


   useEffect(()=>{
    if(!file){
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload=()=>{
      setPreviewUrl(fileReader.result)
    }
    fileReader.readAsDataURL(file)
    setFormData({...formData,file})
  },)

  
  
  const uploadImage =  (e) => {
   const pickedFile = e.target.files[0]
    pickedFile.isUploading=true;
    setFile(pickedFile )
    console.log(pickedFile)

    //upload file
    

    // axios.post('url',formData)
    // .then((res)=> {
    //   file.isUploading = false;
    //   setFormData({...formData,file})
    //   .catch((err)=>{
    //     console.log(err)
    //   })
    // })

    
  }

  const pickedImageHandler = () => {
    filePickerRef.current.click();
  }

  //ahora lo que tenemos que hace r es crear una preview de la url de la imagen para el archivo que elegimos
  //obtendremos la url en el useEffect y le pasarlos el file como una deependencia para que cuando cambia la url cambie el archivo

  return (
    <div className='photo-container'>
      <input
      style={{display:"none"}}
      type="file"
      ref={filePickerRef}
      accept=".jpg,.png,.jpeg"
      onChange={uploadImage}
      />
      <div className='image-upload'>
        <div className='image-upload__preview'>
          {previewUrl && <img src={previewUrl} alt="preview"/>}
          {!previewUrl && (
            <div className='center'>
              <button className='image-upload-button' type='button' onClick={pickedImageHandler}></button>
            </div>
          )}
        </div>
    {/* creamos el boton para editar la imagen, el cual solo estara visible si seleccionamos una imagen y queremos cambiarla */}
        {previewUrl && (
          <div className='center'> 
            <button className='image-upload-button' type='button' onClick={pickedImageHandler}>
              editar
            </button>
            </div>
        )}
      </div>
    </div>
  )
}

export default ImageUpload;