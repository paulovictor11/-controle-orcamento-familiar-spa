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
    useColorModeValue,
} from '@chakra-ui/react';
import { useRef } from 'react';
import CreateForm from '../../views/Form/create';

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
                        backgroundColor={useColorModeValue(
                            'gray.200',
                            'gray.600'
                        )}
                        focusBorderColor="purple.500"
                        ref={searchInputRef}
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label="Search database"
                            backgroundColor="purple.500"
                            color="white"
                            _hover={{ backgroundColor: 'purple.600' }}
                            icon={<SearchIcon />}
                        />
                    </InputRightElement>
                </InputGroup>
            </Stack>

            <CreateForm />
        </Flex>
    );
};

export default Menu;
