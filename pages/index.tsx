/* eslint-disable react-hooks/rules-of-hooks */
import {
    Box,
    Flex,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { FaDollarSign } from 'react-icons/fa';
import { BsJournalArrowDown, BsJournalArrowUp } from 'react-icons/bs';
import { parseCookies } from 'nookies';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import StatCard from '../src/components/StatCard';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { token } = parseCookies(context);

    if (Boolean(token) === false) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false
            }
        };
    }

    return {
        props: {}
    }
}

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Resumo</title>
            </Head>
            <Navbar />
            <Box mx="36" pt="16" pb="8">
                <Flex direction="row">
                    <Text fontSize="xx-large" fontWeight="bold">
                        Olá, Paulo
                    </Text>
                </Flex>

                <SimpleGrid
                    pt={8}
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 5, lg: 8 }}>
                    <StatCard
                        title={'Total neste mês'}
                        stat={'5,000'}
                        icon={<FaDollarSign size={'3em'} />}
                    />
                    <StatCard
                        title={'Total das receitas neste mês'}
                        stat={'1,000'}
                        icon={<BsJournalArrowDown size={'3em'} />}
                    />
                    <StatCard
                        title={'Total das despesas neste mês'}
                        stat={'7'}
                        icon={<BsJournalArrowUp size={'3em'} />}
                    />
                </SimpleGrid>
            </Box>
        </>
    );
};

export default Home;
