// React
import {
  Fragment,
  ReactNode
} from 'react';
// Next
import Head from 'next/head';
// Material UI
import { Box } from '@mui/material';
// Components
import {
  Footer,
  Navbar,
  Sidebar
} from '../components';


interface Props {
  children: ReactNode;

  pageTitle: string;
}

export const MainLayout = ({
  children,

  pageTitle
}: Props) => {
  const layoutTitle = `Labels | ${ pageTitle }`;

  return (
    <Fragment>
      <Head>
        <title>{ layoutTitle }</title>
      </Head>

      <Navbar />
      {/*<Sidebar />*/}      

      <Box
        component='main'
        mt={ 10 }
      >
        { children }
      </Box>

      <Footer />
    </Fragment>
  );
}
