'use client'
import { Box, Text, Flex, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex justifyContent="center" m='8'>
      <VStack spacing='12'>
        <Box p='4' pr='12' pl='12' border='1px' borderColor='gray.600' rounded='xl'>
          <Text fontWeight="extrabold">Teste inicial do portfólio 🆙</Text>
        </Box>
      </VStack>
    </Flex>
  )
}
