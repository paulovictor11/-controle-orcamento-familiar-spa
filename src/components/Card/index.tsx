import { ReactNode } from 'react';
import { Box, BoxProps, Center, useColorModeValue } from '@chakra-ui/react';

type CardProps = BoxProps & {
    children: ReactNode;
    width?: string;
    marginY?: number;
};

const Card = ({ children, width = 'full', marginY = 6, ...props }: CardProps) => {
    return (
        <Box
            w={width}
            bg={useColorModeValue('white', 'gray.600')}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            padding="6"
            marginY={marginY}
            {...props}
        >
            {children}
        </Box>
    );
};

export default Card;
