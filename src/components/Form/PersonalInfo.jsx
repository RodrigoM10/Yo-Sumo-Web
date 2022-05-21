import React from 'react'
import './FormStyle.scss'


const PersonalInfo = ({formData,setFormData}) => {
  return (
    <div className='personal-info-container'>
      <input type ="text" placeholder="Coloque su nombre completo" value={formData.name} name="name" onChange={(e)=> setFormData({...formData, name: e.target.value})} />
      <input type ="text" placeholder="Coloque su celular" name="cellphone" value={formData.cellphone} onChange={(e)=> setFormData({...formData, cellphone: e.target.value})}/>
      <input type ="email" placeholder="Coloque su email" name="email" value={formData.email} onChange={(e)=> setFormData({...formData, email: e.target.value})}/>
    </div>
  )
}

export default PersonalInfo