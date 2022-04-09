import {
    Button,
    Heading,
    Input,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Card from '../../components/Card';

const UpdatePassword = () => {
    return (
        <Card marginY={0}>
            <Heading size="lg" lineHeight="shorter" mb={6}>
                Alterar Senha
            </Heading>

            <Text mb="8px">Nova Senha:</Text>
            <Input
                height="45px"
                backgroundColor={useColorModeValue('gray.200', 'gray.800')}
                focusBorderColor="purple.500"
                borderRadius="sm"
                placeholder="Senha"
                mb={4}
            />

            <Text mb="8px">Confirmar Nova Senha:</Text>
            <Input
                height="45px"
                backgroundColor={useColorModeValue('gray.200', 'gray.800')}
                focusBorderColor="purple.500"
                borderRadius="sm"
                placeholder="Confirmar Senha"
            />

            <Button
                marginTop={6}
                color={useColorModeValue('white', 'black')}
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

export default UpdatePassword;
