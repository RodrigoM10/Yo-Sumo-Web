
import React,{useState,useEffect} from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import InputField from './InputField'
import './FormStyle.scss'
import MultistepForm, { FormStep } from './MultistepForm'
import Advices from './FormAdvices/FormAdvices'
import { TextField } from '@material-ui/core'
import { SuccessAlert } from '../alert/SweetAlert'
import { getPetitions } from '../../services/publicApiService'
import { SavePetitions } from '../../services/publicApiService'



const PetitionForm = () => {

  const [image,setImage] =useState({})
const [formValues,setFormValues] = useState({})
  // const uploadImage =  (e) => {
  //   const imagen = e.target.files[0];

  //   setImage(imagen.name);
  // };


console.log("Valores del formulario guardados:",formValues)



 useEffect(() => {

  async function loadPetitions () {
    const response = await getPetitions()

    if (response.status === 200) {
      console.log("RESPUESTA CORRECTA",response.data)
    } 
  }

  loadPetitions ()
 },[])
 

  return (
    <div className="form">
      
      <div className="form-container">
        <MultistepForm
          initialValues={{
            title: "",
            image:"",
            description:"",
            name:"",
            cellphone:"",
            email:"",
          }}
          onSubmit={(values,actions) => {
            SavePetitions(values)
            setFormValues(values)
            SuccessAlert("Peticion creada!","Podes a visualizar tu peticion en la pestaña 'mis peticiones'");
            actions.resetForm()
          }}

        >
          <FormStep
            stepName="Title"
            onSubmit={() => console.log("running step1")}
            validationSchema={yup.object({
              title : yup.string().min(4).max(20).required("titulo requerido").matches(/[A-Z]/, 'Debe comenzar con mayuscula')
          })}
          className="title-container"
          >
            <InputField            
              name="title"
              label="Titulo"
            />
          </FormStep>
          <FormStep stepName="Imagen"
            onSubmit={() => console.log("running step2")}
            
          className="photo-container">
            <InputField
              name="image"
              label="Imagen"  
            />
          </FormStep>
          <FormStep stepName="Descripción"
            onSubmit={() => console.log("running step3")}
            validationSchema={yup.object({
              description:yup.string().max(500).required("Coloque una descripción")
          })}
            className="description-container">
            <InputField
              name="description"
              label="Descripción"
            />
          </FormStep>
          <FormStep stepName="información personal"
            onSubmit={() => console.log("running step4")}
            validationSchema={yup.object({
              name:yup.string().required(),
              cellphone:yup.number().required(),
              email:yup.string().email().required("Debe colocar un mail valido"),
            })}
            className="personal-info-container">
            <InputField name="name" label="Nombre completo" />
            <InputField name="cellphone" label="Celular" />
            <InputField name="email" label="email" />
          </FormStep>
        </MultistepForm>
      </div>
      <Advices/>
    </div>
  );
}

export default PetitionForm;