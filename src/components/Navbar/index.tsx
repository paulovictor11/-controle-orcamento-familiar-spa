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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from './NavLink';
import Link from 'next/link';

interface INavLink {
    title: string;
    path: string;
}

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const links: INavLink[] = [
        { title: 'Resume', path: '/' },
        { title: 'Incomes', path: '/incomes' },
        { title: 'Expenses', path: '/expenses' },
    ];
    const profileAvatar =
        'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9';

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
                        <MenuItem>My Profile</MenuItem>
                        <MenuItem>...</MenuItem>
                        <MenuDivider />
                        <MenuItem>
                            <Link href="/signin">Logout</Link>
                        </MenuItem>
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
        <Box bg="gray.600" px={4} paddingX="12">
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
