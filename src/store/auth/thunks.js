import { checkingCredentials, login, logout } from "."
import { loginWithEmailPaswword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() )
    
    }
}

export const startGoogleSignIn = ( email, password ) => {
    return async( dispatch ) => {
        
        dispatch( checkingCredentials() )
        
        const result = await signInWithGoogle()
        if ( !result ) return dispatch( logout( result.errorMessage ) )
    
        return dispatch ( login( result ) )
    
    
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async( dispatch ) => {
        
        dispatch( checkingCredentials() )
        
        const result = await loginWithEmailPaswword({ email, password })
        
        if ( !result.ok ) return dispatch( logout( result ) )
    
        return dispatch ( login( result ) )
    
    
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {

    return async( dispatch ) => {
    
        dispatch( checkingCredentials() )    
        
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName })
    
        if ( !ok ) return dispatch( logout( { errorMessage } ))
        
    
        dispatch( login( uid, displayName, email, photoURL ) )
    }

}

export const startLogout = () => {

    return async ( dispatch ) =>{
        
        await logoutFirebase()
        
        dispatch( logout({ errorMessage: null }) )
        dispatch( clearNotesLogout() )
    
    }

}
