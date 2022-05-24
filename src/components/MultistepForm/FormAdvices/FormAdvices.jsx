import React from 'react'
import { TITLES_ADVICES } from '../../../mocks/formAdvices'
import '../FormStyle.scss'

const Advices = () => {
  return (
    <div className='advice-container'>
        <h2 className='advice-title'><strong>Consejos</strong></h2>
        <div className='advice-list-container'>
        {TITLES_ADVICES.map((advices) => {
            return (    
                <ul className='advice-list' >
                    <li className='listed'>{advices}</li>
                </ul>
            )
        })}
        </div> 
    </div>
  )
}

export default Advices;