import { Box, Container, Flex, Heading, Text, Grid, Button } from "@chakra-ui/react"
import { SectionTitle } from "./SectionTitle"
import { AiFillCheckCircle } from "react-icons/ai"

export const Card = ({ planType, price }) => {
    return (
        <Box
            background="blue"
            padding="3em" color="white"
            backgroundColor="#0e0e0e"
            borderRadius="8px"
            fontSize={14}
            margin="0 auto"
            _hover={[{
                transition: "0.6s ease",
                backgroundColor: "#204720",
                boxShadow: "0px 59px 20px -37px rgba(0,0,0,0.53)",
            }, {
                transition: "0.6s ease",
                backgroundColor: "#204720",
                boxShadow: "0px 59px 20px -37px rgba(0,0,0,0.53)",
            }, {
                transform: "scale(1.05)",
                transition: "0.6s ease",
                backgroundColor: "#204720",
                boxShadow: "0px 59px 20px -37px rgba(0,0,0,0.53)",
            }]}

        >
            <Box textAlign="center">
                <Heading as="h4" size="lg" fontWeight="300">{planType}</Heading>
                <Flex alignItems="baseline" justifyContent="center" pt={1} pb={4}>
                    <Text fontSize="3xl" fontWeight="bold">{price}</Text>
                    <Text size="md" fontWeight="200">/month</Text>
                </Flex>
            </Box>
            <Box>
                <Flex alignItems="center"><AiFillCheckCircle color="green" /><Text p={2}>Access to all gym equipment</Text></Flex>
                <Flex alignItems="center"><AiFillCheckCircle color="green" /><Text p={2}>Unlimited training time</Text></Flex>
                <Flex alignItems="center"><AiFillCheckCircle color="green" /><Text p={2}>1 free entry for a friend every month</Text></Flex>
                <Flex alignItems="center"><AiFillCheckCircle color="green" /><Text p={2}>Discounts on group fitness classes</Text></Flex>
            </Box>
            <Button
                variant="outline"
                colorScheme="gray"
                w="100%"
                mt={[5, 10, 10]}
                _hover={{
                    color: "black",
                    backgroundColor: "gray.100",
                    transition: "0.3s ease",
                }}
            >
                Buy online
            </Button>
        </Box>
    )
}

export const Plans = () => {
    return (
        <Container maxW="container.xl">
            <SectionTitle title="PLANS" subtitle="First entrance for free" />
            <Grid templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap="40px" mb={20}>
                <Card planType="BASIC" price="$39" />
                <Card planType="PLUS" price="$59" />
                <Card planType="VIP" price="$99" />
            </Grid>
        </Container>
    )
}
