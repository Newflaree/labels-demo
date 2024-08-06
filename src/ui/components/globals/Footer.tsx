// Next
import Image from 'next/image';
// Material UI
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
} from '@mui/material';
// Material Icons
import {
  Facebook,
  Instagram,
  LinkedIn
} from '@mui/icons-material';


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const logoUrl = 'https://res.cloudinary.com/newflare/image/upload/v1722537202/labels/gbbjyyngealhmp5yauqa.png';

  return (
    <Box
      zIndex={ 99 }
      component="footer"
      sx={{
        position: 'relative',
        backgroundColor: ( theme ) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[ 200 ]
            : theme.palette.grey[ 800 ],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={ 6 } textAlign='center'>
          <Grid item xs={ 12 } sm={ 4 } mt={ 4 }>
            <Image
              alt='logo labels'
              src={ logoUrl }
              width={ 210 }
              height={ 150 }
            />
          </Grid>

          <Grid item xs={ 12 } sm={ 4 }>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
            >
              Contáctanos
            </Typography>
            {
              /*
            <Typography variant="body2" color="text.secondary">
              123 Indicar dirección, Ciudad, Pais
            </Typography>
              * */
            }
            <Typography variant="body1" color="text.secondary">
              <Link
                href="mailto:"
              >
                ejemplo@email.cl
              </Link>
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <Link
                target='_blank'
                href="https://wa.me/+"
              >
                +56 9 1111 1111
              </Link>
            </Typography>

            <Typography variant="h6" color="text.primary" gutterBottom mt={4}>
              Síguenos
            </Typography>
            <Link
              target='_blank'
              mx={ 1 }
              href=""
              color="inherit"
              sx={{ ':hover': { color: '#505483' } }}
            >
              <Facebook fontSize='large' />
            </Link>

            <Link
              target='_blank'
              mx={ 1 }
              href=""
              color="inherit"
              sx={{ ':hover': { color: '#505483' } }}
            >
              <Instagram fontSize='large'/>
            </Link>

            <Link
              target='_blank'
              mx={ 1 }
              href=""
              color="inherit"
              sx={{ ':hover': { color: '#505483' } }}
            >
              <LinkedIn fontSize='large' />
            </Link>
          </Grid>

          <Grid item xs={ 12 } sm={ 4 }>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
            >
              Sobre nosotros
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"  
              mb={ 2 }
            >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et massa venenatis, finibus nulla quis, placerat nisi. Nulla tortor justo, efficitur in nisi tincidunt, convallis venenatis nulla. Praesent quis orci blandit, sodales dui non, sodales arcu. Donec egestas tortor mauris. Nullam accumsan ut augue quis ornare.
            </Typography>
          </Grid>
        </Grid>

        <hr
          style={{
            marginTop: '30px',
            marginBottom: '30px',
          }}
        />

        <Box>
          <Typography
            pb={ 4 }
            variant="body1"
            color="text.secondary"
            align="center"
          >
            {"Copyright © "}
            <Link href="#">
              NWFL Soluciones de Software.
            </Link>{" "}
            { currentYear }
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
