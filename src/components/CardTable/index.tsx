import { DeleteIcon, EditIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

const CardTable = () => {
    const TableItem = ({
        title,
        content,
    }: {
        title: string;
        content: string;
    }) => {
        return (
            <Flex direction="column">
                <Text fontSize="md">{title}</Text>
                <Text noOfLines={2} py={2} fontSize="xl" lineHeight={'5'}>
                    {content}
                </Text>
            </Flex>
        );
    };

    return (
        <Flex gap={6}>
            <Box h="20" width="100px">
                <TableItem title="#" content="1" />
            </Box>
            <Box h="20" width="1000px">
                <TableItem
                    title="Descrição"
                    content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat rerum quisquam natus, quibusdam asperiores hic consectetur ipsum eveniet!"
                />
            </Box>
            <Box h="20" width="150px">
                <TableItem title="Valor" content="$ 1.00" />
            </Box>
            <Box h="20" width="150px">
                <TableItem title="Data" content="2022-04-02" />
            </Box>
            <Box h="20" width="110px">
                <Text fontSize="md">Ações</Text>
                <Flex gap={2} pt="2">
                    <IconButton
                        size="sm"
                        aria-label="Info"
                        icon={<InfoOutlineIcon />}
                        _hover={{
                            backgroundColor: 'purple.400',
                            color: 'black',
                        }}
                    />
                    <IconButton
                        size="sm"
                        aria-label="Edit"
                        icon={<EditIcon />}
                        _hover={{
                            backgroundColor: 'purple.400',
                            color: 'black',
                        }}
                    />
                    <IconButton
                        size="sm"
                        aria-label="Delete"
                        icon={<DeleteIcon />}
                        _hover={{
                            backgroundColor: 'red.400',
                            color: 'black',
                        }}
                    />
                </Flex>
            </Box>
        </Flex>
    );
};

export default CardTable;