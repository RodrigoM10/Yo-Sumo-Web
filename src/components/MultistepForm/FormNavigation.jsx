import React from 'react'
import {Button} from '@material-ui/core'
import './FormStyle.scss'


const FormNavigation = (props) => {

    const {IsLastStep,hasPrevious,onBackClick} = props

  return (
    <div className="footer">
        {hasPrevious && (
            <Button type="button" onClick={onBackClick}>
                Atras
            </Button>
        )}
        <Button type="submit"  >{IsLastStep ? 'Finalizar' : 'Siguiente'}</Button> 
        {} 
    </div>
  )
}

export default FormNavigation