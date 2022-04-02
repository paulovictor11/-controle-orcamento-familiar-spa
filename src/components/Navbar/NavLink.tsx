import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type NavLinkProps = {
    path: string;
    children: ReactNode;
}

export function NavLink({ path, children }: NavLinkProps) {
    const router = useRouter();
    const isActive = router.pathname == path;

    return (
        <Link href={path} passHref>
            <ChakraLink
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.800'),
                    color: 'white'
                }}
                color={isActive ? "purple.400" : 'whiteAlpha.800'}
            >
                {children}
            </ChakraLink>
        </Link>
    );
}