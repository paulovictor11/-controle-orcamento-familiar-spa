import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Card from '../src/components/Card';
import CardTable from '../src/components/CardTable';
import Menu from '../src/components/Menu';
import Navbar from '../src/components/Navbar';

const Expenses: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Despesas</title>
            </Head>
            <Navbar />
            <Box mx="36" pt="16" pb="8">
                <Menu />
                <Card>
                    <CardTable />
                </Card>
                <Card>
                    <CardTable />
                </Card>
            </Box>
        </>
    );
};

export default Expenses;
