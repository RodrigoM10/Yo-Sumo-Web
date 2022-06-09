import { Container } from '@material-ui/core'
import React from 'react'
import '../FormStyle.scss'
import testPhoto from '../../../assets/icons/Contaminación_en_Maracaibo,_Venezuela.jpg'

const Summary = ({formData}) => {
 const {title,
        photo,
        description,
        name,
        cellphone,
        email
      } = formData || {}

  return (
    <div className="container">
      <div className="pre-publish">
        <div className="pre-publish-1">
          <span>
            <strong>¡Chequea tus peticiones!</strong>
            <span> Aqui vas a poder encontrarlas.</span>
          </span>
        </div>
      </div>
      <div className="summary-container">
        <div className="title-summary">Basurales en calle 9 de julio</div>
        <div className="photo-signs-container">
          <div className="photo-description">
            <img src={testPhoto} width="300" height="200px" alt="foto"></img>
            <div>Jose Santillan</div>
            <hr></hr>
            <div>Limpien los basurales che!</div>
          </div>

          <div className="signs">
            <div className="signs-flex">
              <p>
                <strong>¡1 persona firmo! Trata de juntar mas firmas.</strong>
              </p>
              <div className="progress-container">
                <div className="progress-fill">
                  <div className="progress-text"></div>
                </div>
              </div>
              <hr></hr>
              <div>Jose Santillan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;