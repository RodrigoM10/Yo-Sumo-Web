import React from 'react'
import { TextField } from '@material-ui/core'
import {FieldConfig,useField
} from 'formik'

const InputField = ({label,...props}) => {
    const [field,meta] = useField(props)
  return (
    <div>
    <TextField
    fullWidth
    label={label}
    {...field}
    {...props}
    error={meta.touched && Boolean(meta.error)}
    helperText={meta.touched && meta.error}

    />
    </div>
  )
}

export default InputField;