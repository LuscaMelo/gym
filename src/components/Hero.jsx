import { Box, Heading, Text, Container, Button } from "@chakra-ui/react"
import bg from "../assets/bg.jpg"
import { NavBar } from "./NavBar"

export const Hero = () => {
    return (
        <Box
            h="100vh"
            w="100%"
            backgroundImage={bg}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="top"
        >
            <NavBar />
            <Box
                h="90%"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Container maxW="container.xl">
                    <Heading as="h2" mt={["150px", "250px", "300"]} fontSize={["5xl", "6xl", "7xl"]} color="white" letterSpacing="-2px">Are you ready to <span style={{ textDecoration: "underline", textDecorationColor: "#48bb78" }}>change?</span></Heading>
                    <Text color="gray.50" fontSize={["sm", "md", "lg"]} maxWidth={["700px", "500px", "700px"]} py={5}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugiat magni asperiores, natus vel mollitia reprehenderit atque consequuntur aliquid facilis impedit reiciendis, tenetur velit, eos in. Inventore animi veniam incidunt.</Text>
                    <Button size="lg" colorScheme="green"
                        fontWeight="bold"
                        mt={3}
                        mr={3}
                        _hover={{
                            backgroundColor: "green.400",
                            color: "green.700"
                        }}
                    >
                        Join Now
                    </Button>
                    <Button size="lg" colorScheme="green" variant="outline"
                        fontWeight="bold"
                        mt={3}
                        _hover={{
                            backgroundColor: "green.400",
                            color: "green.700"
                        }}
                    >
                        About Us
                    </Button>
                </Container>
            </Box>
        </Box >
    )
}