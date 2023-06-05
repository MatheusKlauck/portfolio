'use client'
import { Flex, Text } from "@chakra-ui/react";

function Footer() {
    return (
        <Flex px='8' py='4' justify="space-between">
            <Text fontSize="lg" fontWeight="bold" userSelect="none">
                Made in RS 🟢🔴🟡
            </Text>
        </Flex>
    );
}

export { Footer }