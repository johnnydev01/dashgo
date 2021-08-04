import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({showProfileData = true}) {
    return (
        <Flex align="center">
        {showProfileData && (
            <Box mr="4" textAlign="right">
                <Text>Johnny Silva</Text>
                <Text color="gray.300" fontSize="small">
                    johnnysilva.dev@gmail.com
                </Text>
           </Box>
        )}
        <Avatar size="md" name="Johnny Silva"/>
    </Flex>
    );
}