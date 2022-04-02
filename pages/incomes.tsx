import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Card from '../src/components/Card';
import Menu from '../src/components/Menu';
import Navbar from '../src/components/Navbar';

const Incomes: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Receitas</title>
            </Head>
            <Navbar />
            <Box mx="36" pt="16" pb="8">
                <Menu />
                <Card>aaaaaaaaaaaaaa</Card>
            </Box>
        </>
    );
};

export default Incomes;
