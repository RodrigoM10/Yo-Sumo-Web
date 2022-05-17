import React, { useState } from "react";
import Title from "./Title";
import Photo from "./Photo";
import Description from "./Description";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Advices from "./FormAdvices/FormAdvices";
import './FormStyle.scss'

const Form = () => {
  const [page, setPage] = useState(0);
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

  

  const PageDisplay = () => {
    if (page === 0) {
      return <Title formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Photo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Description formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <Summary formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
      <div
          style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" :  "100%"  }}
        >
        </div>
      </div>
      <div className="header">
        <div className="header-section">
            <h1><strong>{FormTitles[page]}</strong></h1>
            <br/>
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
            
            onClick={() => {
             if(page === FormTitles.length-1){
               alert("Peticion creada")
               console.log({formData})
               setPage(0)
             }
             else {
               setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length-1 ? "Finalizar" : "Siguiente"}
          </button>
          </div>
          <Advices/>
        </div>
      
    </div>
  );
};

//formTitles.length -1 representa la ultima pagina
export default Form;
