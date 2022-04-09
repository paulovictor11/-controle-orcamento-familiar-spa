import {
    Box,
    Flex,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Card from '../src/components/Card';
import Menu from '../src/components/Menu';
import Navbar from '../src/components/Navbar';
import DeleteForm from '../src/views/Form/delete';
import EditForm from '../src/views/Form/edit';
import InfoForm from '../src/views/Form/info';

const Incomes: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Receitas</title>
            </Head>
            <Navbar />
            <Box mx="36" pt="16" pb="8">
                <Menu />
                <Card>
                    <Table
                        variant="simple"
                        colorScheme={useColorModeValue('gray', 'white')}>
                        <Thead>
                            <Tr>
                                <Th>#</Th>
                                <Th>Descrição</Th>
                                <Th>Valor</Th>
                                <Th>Data</Th>
                                <Th>Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>
                                    <Text noOfLines={2}>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Placeat rerum quisquam
                                        natus, quibusdam asperiores hic consectetur
                                        ipsum eveniet!
                                    </Text>
                                </Td>
                                <Td>R$ 1,00</Td>
                                <Td>09/04/2022</Td>
                                <Td>
                                    <Flex gap={2}>
                                        <InfoForm />
                                        <EditForm />
                                        <DeleteForm />
                                    </Flex>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>
                                    <Text noOfLines={2}>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Placeat rerum quisquam
                                        natus, quibusdam asperiores hic consectetur
                                        ipsum eveniet!
                                    </Text>
                                </Td>
                                <Td>R$ 1,00</Td>
                                <Td>09/04/2022</Td>
                                <Td>
                                    <Flex gap={2}>
                                        <InfoForm />
                                        <EditForm />
                                        <DeleteForm />
                                    </Flex>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Card>
            </Box>
        </>
    );
};

export default Incomes;
