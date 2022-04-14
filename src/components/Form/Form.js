import React, { useState } from "react";
import Title from "./Title";
import Photo from "./Photo";
import Description from "./Description";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import './FormStyle.scss'

const Form = () => {
  const [page, setPage] = useState(0);
  const [formData,setFormData] = useState({
    title : "",
    photo: "",
    description: "",
    name:"",
    cellphone:"",
    email:""
  })

  const FormTitles = [
    "Titulo",
    "Foto",
    "descripcion",
    "Personal Info",
    "Summary",
  ];

  

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
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
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
        </div>
      
    </div>
  );
};

//formTitles.length -1 representa la ultima pagina
export default Form;
