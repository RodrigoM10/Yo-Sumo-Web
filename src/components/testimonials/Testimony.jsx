import React from 'react'
import './testimonials.scss'


const Testimony = (props) => {
    const {testimonials} = props;



  return (
    <>
     <div className="testimonials">
        <div className="inner">
             <div className="row-testimonial">
        {testimonials.map((testimony) => (
            <div className="col-testimonial">
                <div className="testimonial">
                  <img src={testimony.image} alt={testimony.name}/>
                  <div className="name">{testimony.name}</div>        
                  <p className='testimony'>
                    {testimony.description}
                  </p>
                </div>
            </div>                  
         ))     
        } 
            </div>
        </div>
    </div>  
    </>
  )
}

export default Testimony