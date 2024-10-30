import { useForm } from "../../hooks/useForm"
import { Google } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography, Link, Alert } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks"
import { useDispatch, useSelector } from "react-redux"
import { useMemo } from "react"

const formData = {
  email: '',
  password: '',
}

export const LoginPage = () => {

const dispatch = useDispatch()

const { status, errorMessage } = useSelector( state => state.auth )

const isAuthenticating = useMemo( () => status === 'checking', [status] )


const { onInputChange, email, password } = useForm( formData )


const onSubmit =  (event) => {
  event.preventDefault();
  dispatch( startLoginWithEmailPassword({ email, password }) )
}

const onGoogleSignIn = () => {

  dispatch( startGoogleSignIn() )
  
}
  
  return (
    <>
    
    <AuthLayout title="Login">
      
      <form className='animate__animated animate__fadeIn animate__faster' onSubmit={ onSubmit }>
        
        <Grid2 container spacing={2}>
        
          <Grid2 size={{ xs: 12, md: 12 }} >
           <TextField onChange={ onInputChange } label="correo" type="email" name="email" placeholder="Correo@google.com" fullWidth value={ email } />
          </Grid2>
          
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField onChange={ onInputChange } label="Contraseña" type="password" name="password" placeholder="constraseña" value={ password }  fullWidth/>
          </Grid2>
          
          <Grid2 display={ !!errorMessage ? '' : 'none' } size={ 12 }>
            <Alert severity="error">{ errorMessage }</Alert>
          </Grid2>
          
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button disabled={ isAuthenticating } sx={{ mt: 1 }} fullWidth type="submit" variant="contained">
              Login
            </Button>
          </Grid2>
          
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Button disabled={ isAuthenticating } onClick={ onGoogleSignIn } sx={{ mt: 1 }} fullWidth variant="contained">
              <Google/>
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid2>
          
          <Grid2 direction='row' justifyContent='end'>
            <Link component={ RouterLink } color='inherit' to="/auth/register">
             Crear una cuenta
            </Link>
          </Grid2>
          
        </Grid2>
        
      </form>
    
    </AuthLayout>
    
    
    
    </>
  )
}

