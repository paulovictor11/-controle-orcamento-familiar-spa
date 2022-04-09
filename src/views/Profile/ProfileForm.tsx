import { Button, Heading, Input, Text } from '@chakra-ui/react';
import Card from '../../components/Card';

const ProfileForm = () => {
    return (
        <Card marginY={0}>
            <Heading size="lg" lineHeight="shorter" mb={6}>
                Editar Perfil
            </Heading>

            <Text mb='8px'>Nome:</Text>
            <Input
                height="45px"
                backgroundColor="gray.800"
                focusBorderColor="purple.500"
                borderRadius="sm"
                placeholder="Nome"
                mb={4}
            />

            <Text mb='8px'>Email:</Text>
            <Input
                height="45px"
                backgroundColor="gray.800"
                focusBorderColor="purple.500"
                borderRadius="sm"
                placeholder="Email"
            />

            <Button
                as={'a'}
                marginTop={6}
                backgroundColor="purple.500"
                width="150px"
                borderRadius="sm"
                _hover={{ backgroundColor: 'purple.600' }}
                mt={8}>
                Salvar
            </Button>
        </Card>
    );
};

export default ProfileForm;
