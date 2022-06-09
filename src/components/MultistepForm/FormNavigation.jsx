import React from 'react'
import { FormikValues } from 'formik'
import {Button} from '@material-ui/core'
import './FormStyle.scss'
import { Link } from 'react-router-dom'
import { PUBLIC_PATHS_NAV } from '../../routes/config'

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