// Material UI
import {
  Box,
  Typography
} from '@mui/material';
// Material UI
import { Construction } from '@mui/icons-material';


export const Building = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='calc( 100vh - 100px )'
    >
      <Typography
        variant='h4'
        component='h4'
        fontSize={ 30 }
        fontWeight={ 400 }
      >
        Sitio en
      </Typography>

      <Typography
        variant='h1'
        component='h1'
        fontSize={ 50 }
        fontWeight='bold'
        ml={ 1 }
      >
        Construcción
      </Typography>

      <Construction
        fontSize='large'
        color='primary'
        sx={{ fontSize: 150 }}
      />
    </Box>
  );
}
