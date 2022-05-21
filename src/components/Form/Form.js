import React, { useState,useEffect } from "react";
import Title from "./Title";
import ImageUpload from "./ImageUpload";
import Description from "./Description";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Advices from "./FormAdvices/FormAdvices";
import './FormStyle.scss'
import { PetitionSchema } from "./FormValidation/PetitionSchemas";
import { ValidationError } from "yup";


const Form = () => {
  const [page, setPage] = useState(0);
  const [messageError,setMessageError] = useState({})
  const [isValid,setIsValid] = useState(false)
    const [formData,setFormData] = useState({
    title : "",
    file: "",
    description: "",
    name:"",
    cellphone:"",
    email:""
  })

  const FormTitles = [
    "Titulo de la petición",
    "Agregá una foto",
    "Contá tu historia",
    "Información personal",
    "Resumen de tu petición",
  ];

  const FormSubtitles = [
    "¿Contale a las personas qué es lo que querés cambiar?",
    "Las peticiones con foto consiguen hasta 6 veces más firmas",
    "Explicá el problema y porque es importante. Contá cómo te impacta a vos, a tu familia y a la comunidad, esto hace que más personas apoyen la causa.",
    "Completá tus datos en caso de que tengamos que contactar para revisar la petición.","Antes de finalizar, chequea que todo este correcto, y si necesitas cambiar algo, podes volver a editar tu petición",
  ]

  const CreatePetition = (e) => {
    e.preventDefault();

    setMessageError(validate(formData));
    setIsValid(true);
    // setFormData(formData)

    // const isValid = await PetitionSchema.isValid(formData);
    // console.log(isValid)
  };



  const validate = (values) => {
    const errors = {}
    const regex = ""
    
    if(!values.title){
      errors.title = "Titulo requerido"
    }
    else if(values.title < 4) {
      errors.title ="titulo mas largo"
    }
    if(!values.description){
      errors.description = "Descripcion requerida"
    }
    if(!values.file){
      errors.file = "imagen requerido"
    }
    if(!values.name){
      errors.name = "nombre requerido"
    }
    if(!values.cellphone){
      errors.cellphone = "celular requerido"
    }
    if(!values.email){
      errors.email = "Email requerido"
    }
    return errors;
  }

  

  const PageDisplay = () => {
    if (page === 0) {
      return <Title formData={formData} setFormData={setFormData} messageErrorTitle={messageError.title} />;
    } else if (page === 1) {
      return <ImageUpload formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Description formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Summary formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div >
      {Object?.keys({messageError}).length === 0 && isValid ? <div>exitoso!</div> : <div>INCORRECTO!</div>
      
    }
      <form className="form" onSubmit={CreatePetition}>
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      
      <div className="header">
        <div className="header-section">
          <h1>
            <strong>{FormTitles[page]}</strong>
          </h1>
          <br />
          <h4>{FormSubtitles[page]}</h4>
        </div>
      </div>
      <div className="form-container">
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Atras
          </button>
          <button
           type="submit"
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("Peticion creada");
                console.log({ formData });
                setPage(0);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Finalizar" : "Siguiente"}
          </button>
          
        </div>
        
        
      </div>
      </form>
      <Advices />
    </div>
  );
};

//formTitles.length -1 representa la ultima pagina
export default Form;
