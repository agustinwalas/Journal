import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid2, IconButton, Toolbar, Typography } from "@mui/material"
import { logout } from "../../store/auth"
import { useDispatch, useSelector } from "react-redux"
import { startLogout } from "../../store/auth/thunks"

export const NavBar = ({ drawerWidth = 240 }) => {

  const dispatch = useDispatch()

  const onLogout = () =>{
     dispatch( startLogout() )
  }


  return (
    <AppBar
    position="fixed"
    sx={{
        width: { sm: `calc( 100% - ${ drawerWidth }px)`},
        ml: { sm: `${ drawerWidth }` }
        
    }}
    >
      
      <Toolbar>
        <IconButton
        color="inherit"
        edge="start"
        sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuOutlined/>
        </IconButton>
        
        <Grid2 container sx={{ width: '100%' }} direction={ 'row' } justifyContent={ "space-between" } alignItems='center'>
            
            <Typography variant="h6" noWrap component='div'  > Journal App </Typography>
            <IconButton onClick={ onLogout }  color="error">
                <LogoutOutlined/>
            </IconButton>
        
        </Grid2>
        
      </Toolbar>
      
    </AppBar>
  )
}
