import { ReactNode } from 'react';
import { Box, Center, useColorModeValue } from '@chakra-ui/react';

type CardProps = {
    children: ReactNode;
    widht?: string;
};

const Card = ({ children, widht = 'full' }: CardProps) => {
    return (
        <Center py={2}>
            <Box
                w={widht}
                bg={useColorModeValue('white', 'gray.600')}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
                padding="4">
                {children}
            </Box>
        </Center>
    );
};

export default Card;
