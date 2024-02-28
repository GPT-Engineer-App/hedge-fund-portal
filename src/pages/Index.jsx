// Complete the Index page component for a hedge fund website
import { Box, Button, Flex, Heading, Text, Image, VStack, StackDivider, Container, useColorModeValue } from "@chakra-ui/react";
import { FaChartLine, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bg} color={color}>
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between" py={10}>
          <Heading as="h1" size="xl">
            Alpha Investments
          </Heading>
          <Box>
            <Button leftIcon={<FaPhoneAlt />} colorScheme="teal" variant="solid" mr={4}>
              Contact Us
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
              Subscribe
            </Button>
          </Box>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={10}>
          <VStack align="start" spacing={4} divider={<StackDivider borderColor="gray.200" />}>
            <Heading as="h2" size="lg">
              Strategic Asset Management
            </Heading>
            <Text fontSize="lg">At Alpha Investments, we specialize in strategic asset management, providing our clients with top-tier investment strategies and insights.</Text>
            <Button rightIcon={<FaChartLine />} colorScheme="teal" size="lg">
              Learn More
            </Button>
          </VStack>
          <Box flexShrink={0} mt={{ base: 6, md: 0 }} ml={{ md: 6 }}>
            <Image borderRadius="lg" width={{ md: 560 }} src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwZGVza3xlbnwwfHx8fDE3MDkxMjU5MDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Trading Desk" />
          </Box>
        </Flex>
        <Flex direction="column" align="center" justify="center" py={10}>
          <Heading as="h3" size="md">
            Discover Investment Opportunities
          </Heading>
          <Text fontSize="md" my={2}>
            Explore the various sectors and markets with us and unlock the potential for significant returns.
          </Text>
          <Button colorScheme="blue" variant="outline">
            Explore Markets
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
