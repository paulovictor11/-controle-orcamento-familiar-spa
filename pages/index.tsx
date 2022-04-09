import {
    Box,
    Flex,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { FaDollarSign } from 'react-icons/fa';
import { BsJournalArrowDown, BsJournalArrowUp } from 'react-icons/bs';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import StatCard from '../src/components/StatCard';

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
