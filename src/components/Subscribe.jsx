import { Container, Flex, Box, Input, Button } from "@chakra-ui/react"
import { SectionTitle } from "./SectionTitle"
import bg from "../assets/news.jpg"

export const Subscribe = () => {
    return (
        <Flex
            color="white"
            py={[0, 0, 10]}
            backgroundImage={bg}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <Container maxW="3xl">
                <SectionTitle title="NEWSLETTER" subtitle="Get the latest information from us" />
                <Flex mx={[10, 20, 20]} mb={20} mt={18} bg="white" h="48px" borderRadius="lg" alignItems="center">
                    <Input variant='ghost' placeholder='youemail@lorem.com' h="full" w="full" color="black" />
                    <Button colorScheme='green' size='md' variant="solid" mr="4.5px" px={8}>
                        Subscribe
                    </Button>
                </Flex>
            </Container>
        </Flex>

    )
}