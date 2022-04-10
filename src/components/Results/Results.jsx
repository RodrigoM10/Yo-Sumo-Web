import React from 'react'
import './results.scss'
import imagen from '../../assets/icons/Icon.png'



const Results = () => {
  return (
    <div className='results-container'>
        <div className='results-section'>
            <h2 className='results-text'>
                Despues de 6 meses de peticiones
            </h2>
            <p className='results-subtext'>
                Con nuestro compromiso con la sociedad.
            </p>
        </div>
        <div className='results-numbers'>
            <div className='row-1'>
                <div className='numbers-col-1'>
                <div className='col-icon'>
                            <img src={imagen} alt="icono"/>
                        </div>
                        <div className='col-details'>
                            <h4 className='col-text'>
                                1200+
                            </h4>
                            <p className='col-subtext'>
                                peticiones creadas
                            </p>
                        </div>

                </div>
                <div className='numbers-col-2'>
                       
                        <div className='col-icon'>
                            <img src={imagen} alt="icono"/>
                        </div>
                        <div className='col-details'>
                            <h4 className='col-text'>
                                600+
                            </h4>
                            <p className='col-subtext'>
                                proyectos aprobados
                            </p>
                        </div>
                </div>
            </div>
            <div className='row-1'>
                <div className='numbers-col-1'>
                <div className='col-icon'>
                            <img src={imagen} alt="icono"/>
                        </div>
                        <div className='col-details'>
                            <h4 className='col-text'>
                                1200+
                            </h4>
                            <p className='col-subtext'>
                                peticiones creadas
                            </p>
                        </div>

                </div>
                <div className='numbers-col-2'>
                       
                        <div className='col-icon'>
                            <img src={imagen} alt="icono"/>
                        </div>
                        <div className='col-details'>
                            <h4 className='col-text'>
                                600+
                            </h4>
                            <p className='col-subtext'>
                                proyectos aprobados
                            </p>
                        </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Results;