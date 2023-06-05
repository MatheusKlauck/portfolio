'use client';
import { Text, useColorMode, HStack, IconButton } from "@chakra-ui/react";
import { useRouter } from 'next/navigation';
import { FiMoon, FiSun } from "react-icons/fi";

export default function Header() {
    const router = useRouter();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <HStack justify='space-between' px='8' py='4'>
                <Text
                    bgGradient='linear(to-r, #35ca28, #00fff2)'
                    bgClip='text' fontSize='3xl'
                    fontWeight='extrabold' onClick={() => router.push('/')}
                    cursor='pointer' userSelect='none'>
                    Matheus Klauck
                </Text>
                <HStack>
                    <IconButton
                        aria-label="Mudar tema"
                        title="Mudar tema"
                        icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
                        onClick={toggleColorMode}
                        bg={colorMode === "light" ? "white" : "gray.700"}
                        color={colorMode === "light" ? "gray.700" : "white"}
                        _hover={{ bg: colorMode === "light" ? "gray.100" : "gray.600" }}
                    />
                </HStack>
            </HStack>
        </>
    )
}