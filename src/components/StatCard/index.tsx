import {
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type StatsCardProps = {
    title: string;
    stat: string;
    icon: ReactNode;
};

const StatCard = ({ title, stat, icon }: StatsCardProps) => {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'5'}
            bg={useColorModeValue('white', 'gray.600')}
            shadow={'xl'}
            boxShadow={'2xl'}
            rounded={'md'}>
            <Flex justifyContent={'space-between'}>
                <Box pl={{ base: 2, md: 4 }}>
                    <StatLabel fontWeight={'medium'} isTruncated>
                        {title}
                    </StatLabel>
                    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                        {stat}
                    </StatNumber>
                </Box>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
            </Flex>
        </Stat>
    );
};

export default StatCard;
