import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    Stack,
    Heading,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from './NavLink';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import Link from 'next/link';

interface INavLink {
    title: string;
    path: string;
}

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const links: INavLink[] = [
        { title: 'Resumo', path: '/' },
        { title: 'Receitas', path: '/incomes' },
        { title: 'Despesas', path: '/expenses' },
    ];
    const profileAvatar = 'https://github.com/paulovictor11.png';

    const HamburgerMenu = () => {
        return (
            <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />
        );
    };

    const NavLeft = () => {
        return (
            <HStack spacing={8} alignItems={'center'}>
                <Box>
                    <Heading as="h3" size="lg">
                        C.O.F
                    </Heading>
                </Box>
                <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}>
                    {links.map((link, index) => (
                        <NavLink key={index} path={link.path}>
                            {link.title}
                        </NavLink>
                    ))}
                </HStack>
            </HStack>
        );
    };

    const NavRight = () => {
        return (
            <Flex alignItems={'center'}>
                <Button
                    mr="4"
                    aria-label="Toggle Color Mode"
                    onClick={toggleColorMode}
                    _focus={{ boxShadow: 'none' }}>
                    {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                </Button>

                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar size={'sm'} src={profileAvatar} />
                    </MenuButton>
                    <MenuList>
                        <Link href="/profile" passHref>
                            <MenuItem as="a">Meu Perfil</MenuItem>
                        </Link>
                        <MenuItem>...</MenuItem>
                        <MenuDivider />
                        <Link href="/signin" passHref>
                            <MenuItem as="a">Sair</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Flex>
        );
    };

    const MobileMenu = () => {
        return (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                    {links.map((link, index) => (
                        <NavLink key={index} path={link.path}>
                            {link.title}
                        </NavLink>
                    ))}
                </Stack>
            </Box>
        );
    };

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.600')} px={4} paddingX="12">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <HamburgerMenu />
                <NavLeft />
                <NavRight />
            </Flex>

            {isOpen && <MobileMenu />}
        </Box>
    );
};

export default Navbar;
