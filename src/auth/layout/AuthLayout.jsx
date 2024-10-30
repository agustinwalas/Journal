import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <>
    <Grid2 
    container
    spacing={ 0 }
    alignItems="center"
    direction="column"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
    
        <Grid2
        className="box-shadow"
        xs={ 3 }
        sx={{ backgroundColor:'white', padding: 3, borderRadius: 3 }}
        width={{ sm: 450 }}
        >
        
            <Typography variant="h5" sx={{ mb: 3 }}>{ title }</Typography>
            
            { children }
            
        </Grid2>
    </Grid2>
    </>
  )
}

