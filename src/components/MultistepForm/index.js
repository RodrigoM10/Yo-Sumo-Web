
import React,{useState,useEffect} from 'react'
import * as yup from 'yup'
import InputField from './InputField'
import './FormStyle.scss'
import MultistepForm, { FormStep } from './MultistepForm'
import Advices from './FormAdvices/FormAdvices'
import { SuccessAlert } from '../alert/SweetAlert'
import { getPetitions } from '../../services/publicApiService'
import { SavePetitions } from '../../services/publicApiService'



const PetitionForm = () => {

  const [image,setImage] =useState(null)
const [formValues,setFormValues] = useState({})
  

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
    <>
      
      <div className="form-container">
        <div className='multistep-form'>
        <MultistepForm
          initialValues={{
            title: "",
            image:null,
            description:"",
            name:"",
            cellphone:"",
            email:"",
          }}
          onSubmit={(values,actions) => {
            console.log(image);
            SavePetitions({...values, image })
            setFormValues(values)
            SuccessAlert("Peticion creada!","Podes a visualizar tu peticion en la pestaña 'mis peticiones'");
            actions.resetForm()
          }}

        >
          <FormStep
            stepName="Título"
            onSubmit={() => console.log("running step1")}
            validationSchema={yup.object({
              title : yup.string().min(4,"Debe contener un minimo de 4 caracteres").max(20,"No puede sobrepasar los 20 caracteres").required("Titulo requerido").matches(/[A-Z]/, 'Debe comenzar con mayuscula')
          })}
          >
            <InputField            
              name="title"
              label="Titulo"
            />
          </FormStep>
          {({ formik } = {}) => (
            <FormStep
              stepName="Imagen"
              onSubmit={() => console.log('running step2')}
              
            >
              <InputField
                type="file"
                name="image"
                label="Imagen"
                onChange={(event) => {
                  const [image] = event.currentTarget.files;
                  setImage(image);
                  formik.setFieldValue('image', image.fileName);
                }}
              />
            </FormStep>
          )}
          <FormStep stepName="Descripción"
            onSubmit={() => console.log("running step3")}
            validationSchema={yup.object({
              description:yup.string().min(15,"Debe contener un minimo de 15 caracteres").max(500,"maximo").required("No puede sobrepasar los 500 caracteres")
          })}
            >
            <InputField
              name="description"
              label="Descripción"
            />
          </FormStep>
          <FormStep stepName="información personal"
            onSubmit={() => console.log("running step4")}
            validationSchema={yup.object({
              name:yup.string().required("Coloque su nombre completo"),
              cellphone:yup.number().required("Indique su numero de telefono"),
              email:yup.string().email().required("Debe colocar un mail valido"),
            })}
            >
            <InputField name="name" label="Nombre completo" />
            <InputField name="cellphone" label="Celular" />
            <InputField name="email" label="email" />
          </FormStep>
        </MultistepForm>
        </div>
      </div>
      <Advices/>
    </>
  );
}

export default PetitionForm;