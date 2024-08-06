// Next.js
import NextLink from 'next/link';
import Image from 'next/image';
// Material UI
import {
  AppBar,
  Box,
  Button,
  Link,
  Toolbar,
  Typography
} from '@mui/material';


export const Navbar = () => {
  const logoUrl = 'https://res.cloudinary.com/newflare/image/upload/v1722547307/labels/w5kuryadsf2tt7m93trb.png';

  return (
    <AppBar>
      <Toolbar>
        <NextLink
          href='/'
          passHref
          legacyBehavior
        >
          <Link
            my={ 1 }
            display='flex'
            alignItems='center'
            color='black'
          >
            <Image 
              src={ logoUrl }
              priority={ true }
              alt='Labels Corp'
              width={ 70 }
              height={ 50 }
            />

            <Typography
              ml={ 1 }
              color='primary'
              fontWeight='bold'
              textTransform='uppercase'
              letterSpacing={ 2 }
            >
              Labels Corp
            </Typography>
          </Link>
        </NextLink>

        <Box flex={ 1 } />

        {/*TODO: Descomentar el Menu*/}
        {/*
        <Button
          onClick={ () => {} }
          sx={{
            color: 'white',
            ':hover': {
              bgcolor: 'primary.dark'
            }
          }}
        >
          <Typography>
            Menu
          </Typography>
        </Button>
        */}
      </Toolbar>
    </AppBar>
  );
}
