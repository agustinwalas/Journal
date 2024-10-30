import { StarOutline } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid2
    className='animate__animated animate__fadeIn animate__faster'
    container
    spacing={ 0 }
    alignItems="center"
    direction="column"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', borderRadius: 3}}
    >
        <Grid2 xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: 'white'}}/>
        </Grid2>
        
        <Grid2 xs={ 12 }>
            <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
        </Grid2>
    </Grid2>  
  )
}
