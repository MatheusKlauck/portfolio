
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const customTheme: ThemeConfig = extendTheme({
    config: {
        initialColorMode: 'Dark'
    }
});


export function Providers({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <CacheProvider>
            <ChakraProvider theme={customTheme}>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}