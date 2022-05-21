import React from 'react'
import './FormStyle.scss'





const Title = ({formData,setFormData,messageErrorTitle}) => {

  return (
    <div className="title-container">
      <input
        type="text"
        placeholder="Coloque el titulo"
        name="title"
        required
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        
      />
      <p >{messageErrorTitle}</p>
    </div>
  );
}

//cuando hay algun cambio en el objeto, quiero que el setFormData mantenga todos los campos iguales, excepto el campo en el que el usuario esta completando
export default Title;