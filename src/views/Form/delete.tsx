import { DeleteIcon } from '@chakra-ui/icons';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Button,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';
import React, { RefObject } from 'react';

const DeleteForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef<any>();

    return (
        <>
            <IconButton
                size="sm"
                aria-label="Delete"
                icon={<DeleteIcon />}
                _hover={{
                    backgroundColor: 'red.400',
                    color: 'black',
                }}
                onClick={onOpen}
            />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Remover
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Tem certeza? Você não poderá desfazer essa ação
                            depois.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button
                                backgroundColor="red.500"
                                color="white"
                                onClick={onClose}
                                ml={3}
                                _hover={{
                                    backgroundColor: 'red.600'
                                }}>
                                Remover
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default DeleteForm;
