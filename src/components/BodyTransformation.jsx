import { Box, Container, Flex, Heading, Text, Grid } from "@chakra-ui/react"
import bg from "../assets/bg2.jpg"

export const Card = ({ number, title }) => {
    return (
        <Box
            py={[3, 3, 8]} px={2}>
            <Flex alignItems="center">
                <Heading lineHeight="tall" mr={2} backgroundColor="green.500" px={5} borderRadius="50px" color="black">
                    {number}
                </Heading>
                <Heading>{title}</Heading>
            </Flex>
            <Text color="grey"
            fontSize={15}
            pt={4}
            >
            Quisque vitae eros libero. Aenean tempor turpis libero, sed scelerisque sapien mollis tempor.</Text>
        </Box>
    )
}

export const BodyTransformation = () => {
    return (
        <Box
            backgroundImage={bg}
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Box backgroundColor="#000000c1" color="white" filter="initial">
                <Container maxW="container.xl" pb={20}>
                    <Flex gap={20}>

                        <Flex
                            flexDirection="column"
                            w="80vh"
                            margin="0 auto"
                            justifyContent="flex-end"
                        >
                            <Box textAlign="center">
                                <Heading as="h4" fontSize="17px" pt={20}>Revolutionize your body and soul!</Heading>
                                <Heading as="h3" fontSize={["27px", "30px", "35px"]} fontWeight="bold" pb={20} pt={5}>BODY TRANSFORMATION</Heading>
                            </Box>
                            <Grid templateColumns={["1fr", "repeat(2, 1fr)", "repeat(2, 1fr)"]} gap={6}>
                                <Card title="Workout" number="01." />
                                <Card title="Spinning" number="02." />
                                <Card title="Crossfit" number="03." />
                                <Card title="Core training" number="04." />
                            </Grid>
                        </Flex>

                    </Flex>
                </Container>
            </Box>
        </Box >
    )
}