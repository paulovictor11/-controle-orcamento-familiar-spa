import {
    Avatar,
    Badge,
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Card from '../Card';

const CardProfile = () => {
    return (
        <Card marginY={0} width="520px" height="430px">
            <Flex direction="column">
                <Avatar
                    alignSelf={'center'}
                    size={'xl'}
                    src={'https://github.com/paulovictor11.png'}
                    mb={4}
                    pos={'relative'}
                    _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: 'green.300',
                        border: '2px solid white',
                        rounded: 'full',
                        pos: 'absolute',
                        bottom: 0,
                        right: 3,
                    }}
                />
                <Heading textAlign={'center'} fontSize={'xl'} fontFamily={'body'}>
                    Paulo Victor
                </Heading>
                <Text textAlign={'center'} fontWeight={600} color={'gray.500'} mb={4}>
                    @paulovictor11
                </Text>
                <Text
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}>
                    Desenvolvedor Fullstack e Mobile | Indra Minsait
                </Text>
                <Text
                    fontSize="sm"
                    textAlign={'center'}
                    color={useColorModeValue('gray.700', 'gray.400')}
                    px={3}
                    pt={2}>
                    João Pessoa, PB, Brasil
                </Text>

                <Stack
                    align={'center'}
                    justify={'center'}
                    direction={'row'}
                    mt={6}>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #dev
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #fullstack
                    </Badge>
                    <Badge
                        px={2}
                        py={1}
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        fontWeight={'400'}>
                        #mobile
                    </Badge>
                </Stack>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        borderRadius="sm"
                        _hover={{ backgroundColor: 'purple.600' }}>
                        Mensagem
                    </Button>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        borderRadius="sm"
                        backgroundColor="purple.500"
                        _hover={{ backgroundColor: 'purple.600' }}>
                        Seguir
                    </Button>
                </Stack>
            </Flex>
        </Card>
    );
};

export default CardProfile;
