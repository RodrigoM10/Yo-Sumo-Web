import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './buttonYoSumo.css'

const ButtonYoSumo = ({path, placeholder}) => {
  return (
    <Button as={Link} to={path} className="btn-yosumo" variant="outline">{placeholder}</Button>
  )
}

export default ButtonYoSumo