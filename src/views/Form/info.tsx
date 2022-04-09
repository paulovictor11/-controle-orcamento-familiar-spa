import { AddIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import {
    Button,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Textarea,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';

const InfoForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton
                size="sm"
                aria-label="Info"
                icon={<InfoOutlineIcon />}
                _hover={{
                    backgroundColor: 'purple.400',
                    color: 'black',
                }}
                onClick={onOpen}
            />

            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Cadastrar</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <form>
                            <Stack gap={3}>
                                <FormControl isDisabled>
                                    <FormLabel>Descrição:</FormLabel>
                                    <Textarea
                                        backgroundColor={useColorModeValue(
                                            'gray.200',
                                            'gray.800'
                                        )}
                                        focusBorderColor="purple.500"
                                        borderRadius="sm"
                                        placeholder="Descrição"
                                    />
                                </FormControl>

                                <FormControl isDisabled>
                                    <FormLabel>Valor:</FormLabel>
                                    <Input
                                        backgroundColor={useColorModeValue(
                                            'gray.200',
                                            'gray.800'
                                        )}
                                        focusBorderColor="purple.500"
                                        borderRadius="sm"
                                        placeholder="Valor"
                                    />
                                </FormControl>

                                <FormControl isDisabled>
                                    <FormLabel>Data:</FormLabel>
                                    <Input
                                        type="date"
                                        backgroundColor={useColorModeValue(
                                            'gray.200',
                                            'gray.800'
                                        )}
                                        focusBorderColor="purple.500"
                                        borderRadius="sm"
                                        placeholder="Data"
                                    />
                                </FormControl>
                            </Stack>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button variant="ghost" mr={3} onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button
                            backgroundColor="purple.500"
                            color="white"
                            onClick={onClose}>
                            Salvar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default InfoForm;
