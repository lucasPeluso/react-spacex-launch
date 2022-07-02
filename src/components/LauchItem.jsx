import { FaCalendarAlt } from "react-icons/fa";
import { Box, Spacer, Text, Flex, Tag, Icon } from '@chakra-ui/react';

export function LaunchItem(launch) {
    return (
        <Box 
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg"
        >
            <Flex display="flex">
                <Text fontSize="xl">
                    Mission <strong>{launch.mission_name}</strong>
                </Text>
                <Spacer />
                <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Success" : "Failure"}
                </Tag>
            </Flex>
            <Flex align="center">
                <Icon as={FaCalendarAlt} color="gray.500" fontSize="sm" />
                <Text fontSize="sm" ml={2} color="gray.500">
                    {launch.launch_year}
                </Text>
            </Flex>
        </Box>
    )
}