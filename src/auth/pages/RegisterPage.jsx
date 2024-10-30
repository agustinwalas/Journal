import { Google } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks/useForm"
import { useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email:  [ (value) => value.includes('@'), 'El Correo debe incluir @'],
  password: [ (value) => value.length  >= 6, 'La contraseña debe ser de al menos 6 caracteres'],
  displayName: [ (value) => value.length  >= 3, 'El nombre debe ser de al menos 3 caracteres'],
}


export const RegisterPage = () => {

  const { status, errorMessage } = useSelector( (state) => state.auth )
  const isChekingAuthentication = useMemo( () => status === 'checking', [status])

  const dispatch = useDispatch()

  const [ formSubmitted, setFormSubmitted ] = useState( false )

  const { formState, isFormValid, displayName, displayNameValid, email, emailValid, password, passwordValid, onInputChange } = useForm(formData, formValidations)
  
  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true)
    if ( !isFormValid)  return;
    dispatch( startCreatingUserWithEmailPassword(formState) )
  }

  return (
    <>
    
    <AuthLayout title="Register">
    
    
    <h1>Formulario{ isFormValid ? ' Valido' : ' Invalido'}</h1>
      
      <form className='animate__animated animate__fadeIn animate__faster'>
        
        <Grid2 container spacing={2}>
        
          <Grid2 size={ 12 }>
             <TextField onChange={ onInputChange } error={ !!displayNameValid && formSubmitted } helperText={ formSubmitted && displayNameValid } name="displayName" value={ displayName } label="Nombre" type="text" placeholder="Nombre Completo" fullWidth/>
          </Grid2>
        
          <Grid2 size={ 12 }>
           <TextField onChange={ onInputChange  } error={ !!emailValid && formSubmitted } helperText={ formSubmitted && emailValid  } name="email" value={ email } label="correo" type="email" placeholder="Correo@google.com" fullWidth/>
          </Grid2>
          
          <Grid2 size={ 12 } >
            <TextField onChange={ onInputChange } error={ !!passwordValid && formSubmitted } helperText={ formSubmitted && passwordValid  } name="password" value={ password } label="Contraseña" type="password" placeholder="constraseña" fullWidth/>
          </Grid2>
          
          <Grid2 display={ !!errorMessage ? '' : 'none' } size={ 12 }>
            <Alert severity="error">{ errorMessage }</Alert>
          </Grid2>
          
          <Grid2 size={ 12 }>
            <Button disabled={ isChekingAuthentication } type="submit" onClick={ onSubmit } sx={{ mt: 1 }} fullWidth variant="contained">
              Registrate
            </Button>
          </Grid2>
          
          
          <Grid2 direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to="/auth/login">
             Ya tienes cuenta?
            </Link>
          </Grid2>
          
        </Grid2>
        
      </form>
    
    </AuthLayout>
    
    
    
    </>
  )
}

