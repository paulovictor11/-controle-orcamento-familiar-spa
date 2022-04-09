import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Não Encontrado</title>
            </Head>
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    size="2xl"
                    bgGradient="linear(to-r, purple.400, purple.600)"
                    backgroundClip="text">
                    404
                </Heading>
                <Text fontSize="18px" mt={3} mb={2}>
                    Página não encontrada
                </Text>
                <Text color={'gray.500'} mb={6}>
                    A página que você está procurando parece não existir.
                </Text>

                <Link href="/" passHref>
                    <Button
                        as="a"
                        colorScheme="purple"
                        bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
                        color="white"
                        variant="solid">
                        Voltar para o início
                    </Button>
                </Link>
            </Box>
        </>
    );
};

export default NotFound;
