import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import Card from "../src/components/Card";
import CardProfile from "../src/components/CardProfile";
import Navbar from "../src/components/Navbar";
import ProfileForm from "../src/views/Profile/ProfileForm";
import UpdatePassword from "../src/views/Profile/UpdatePassword";

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

const Profile: NextPage = () => {
    return (
        <>
            <Head>
                <title>Controlador Orçamentário Familiar - Profile</title>
            </Head>
            <Navbar />
            <Box mx="36" pt="16" pb="8">
                <Flex columnGap={16}>
                    <CardProfile />
                    
                    <Flex direction="column" rowGap={8} width="100%">
                        <ProfileForm />
                        <UpdatePassword />

                        <Card marginY={0}>
                            <Heading size="lg" lineHeight="shorter" mb={6} color="red.500">
                                Deletar Conta
                            </Heading>

                            <Text mb='8px'>Tem certeza que deseja apagar sua conta? Todas as informações de receitas e despesas serão removidas do sistema.</Text>
                            <Text mb='8px'>Você poderá criar uma nova conta futuramente.</Text>

                            <Button
                                marginTop={6}
                                width="150px"
                                borderRadius="sm"
                                color="white"
                                backgroundColor="red.500"
                                _hover={{ backgroundColor: 'red.600' }}
                                mt={8}>
                                Deletar
                            </Button>
                        </Card>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default Profile;