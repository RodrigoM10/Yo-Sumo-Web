
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import InputField from './InputField'
import './FormStyle.scss'
import MultistepForm, { FormStep } from './MultistepForm'
import Advices from './FormAdvices/FormAdvices'

const validationSchema = yup.object({
    title: yup.string().required("Debe colocar un titulo")
})





const PetitionForm = ({step}) => {
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
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
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
          <FormStep stepName="image"
            onSubmit={() => console.log("running step2")}
            validationSchema={yup.object({
              image: yup.mixed().required()
          })}
          className="photo-container">
            <InputField   
              className='photo-input'          
              name="image"
              label="Imagen"
              type="file"
            />
          </FormStep>
          <FormStep stepName="Description"
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
          <FormStep stepName="PersonalData"
            onSubmit={() => console.log("running step4")}
            validationSchema={yup.object({
              name:yup.string().required(),
              cellphone:yup.number().required(),
              email:yup.string().email().required("Debe colocar un mail valido"),
            })}
            className="personal-info-container">
            <InputField className="title-container" name="name" label="Nombre completo" />
            <InputField
              name="cellphone"
              label="Celular"
            />
            <InputField
              name="email"
              label="email"
            />
          </FormStep>
        </MultistepForm>
      </div>
      <Advices/>
    </div>
  );
}

export default PetitionForm;