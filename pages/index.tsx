import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Resumo</title>
            </Head>
            <Navbar />
            <Box mx="36" pt="16" pb="8">

            </Box>
        </>
    );
};

export default Home;
