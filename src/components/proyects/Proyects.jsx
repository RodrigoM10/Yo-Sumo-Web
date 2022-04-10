import React from 'react'
import './proyects.css'
import { NewsHeaderCard } from 'react-ui-cards';
import image1 from '../../assets/icons/Contaminación_en_Maracaibo,_Venezuela.jpg'
import CarouselProyects  from './Carousel-proyects'



const proyects = [{
    name: "Bicisenda nueva en la Localidad de Yerba buena",
    id:1,
    imagen:image1,
    description:"Hemos alcanzado muchas firmas para poder presentar este proyecto. ¡Suma la tuya asi lo podamos cumplir!",
    

},
{
    name: "Instalacion de semaforos inteligentes en Capital",
    id:2,
    imagen:image1,
    description:"El proyecto ya cuenta con varias firmas. ¡Colocá la tuya!"

},
{
    name: "Proyecto para plantar 10 arboles por mes",
    id:3,
    imagen:image1,
    description:"Chequea en que consiste el proyecto y firma"

},
// {
//     name: "proyecto 4",
//     id:4,
//     imagen:image1,
//     description:"Hola"

// },
// {
//     name: "proyecto 5",
//     id:5,
//     imagen:image1,
//     description:"Hola"

// },
]

function Proyects() {
  return (
    <div className='proyects-container'>
       
        <p className='heading'>Proyectos en curso</p>
        <div className='testimonials'>
            <NewsHeaderCard
            href='/proyects'
            thumbnail={image1}
            title={<h5 className='heading-h5'>Sistema de multas para los que arrojan basura en la calle</h5>}
            author={<p className='heading-h6'>Municipalidad de Yerba Buena</p>}
            date={<p className='heading-h6'>Mar 2, 2022</p>}
            className='testimonios'
            
            />
            <p className='heading'>Nuestros proyectos anteriores</p>
            <p className='heading-h4'>¡Todavia te podes sumar!</p>
              
        </div>
        <div className='Slider'>
        <CarouselProyects proyects={proyects}/>
        </div>
        
    </div>
  )
}

export default Proyects;