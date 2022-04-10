import React from 'react'
import './testimonials.scss'
import {ImQuotesLeft} from 'react-icons/im'
import image1 from '../../assets/icons/testimonials/p1.png'
import image2 from '../../assets/icons/testimonials/p2.png'
import image3 from '../../assets/icons/testimonials/p3.png'
import Testimony from './Testimony'

function Testimonials() {

  const testimonials = [
    {
      name: "alberto Gonzalez",
      description:"La cuadra de mi casa esta inundada hace mas de una semana. Le pedimos al intendente que se haga cargo del desague ya que no se puede circular.",
      image: image1
    },
    {
      name: "alberto Gonzalez",
      description:"La cuadra de mi casa esta inundada hace mas de una semana. Le pedimos al intendente que se haga cargo del desague ya que no se puede circular.",
      image: image2
    },
    {
      name: "alberto Gonzalez",
      description:"La cuadra de mi casa esta inundada hace mas de una semana. Le pedimos al intendente que se haga cargo del desague ya que no se puede circular.",
      image: image3
    },
    

  ]


  return (
    <div className='testimonials-container'>
       <div>
           <span className="quote-icon" ><ImQuotesLeft /></span>
           <p className='section-title'>
           Algunas peticiones ya presentadas 
           </p>
           <p className='description'>
           Inspirate en estas y creá la tuya
           </p>
            </div>
           <Testimony testimonials={testimonials} />
      
       
    </div>
  )
}

export default Testimonials;