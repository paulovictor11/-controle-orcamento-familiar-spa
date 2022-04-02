import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Button,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Spacer,
    Stack,
} from '@chakra-ui/react';
import { useRef } from 'react';

const Menu = () => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    return (
        <Flex direction="row">
            <Spacer />
            <Stack pb="4">
                <InputGroup size="md">
                    <Input
                        width={'400px'}
                        pr="3rem"
                        type="text"
                        placeholder="Chave de autenticação"
                        backgroundColor="gray.600"
                        ref={searchInputRef}
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label="Search database"
                            backgroundColor="purple.500"
                            _hover={{ backgroundColor: 'purple.600' }}
                            icon={<SearchIcon />}
                        />
                    </InputRightElement>
                </InputGroup>
            </Stack>

            <Button
                ml="3"
                backgroundColor="purple.500"
                borderRadius="sm"
                _hover={{ backgroundColor: 'purple.600' }}
                leftIcon={<AddIcon />}>
                Cadastrar
            </Button>
        </Flex>
    );
};

export default Menu;
