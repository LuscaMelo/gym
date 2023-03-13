import { Box, Flex, Heading, Text, Button, Container, Grid } from "@chakra-ui/react"
import { SectionTitle } from "./SectionTitle"
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../assets/basic.jpg"
import img2 from "../assets/mass.jpg"
import img3 from "../assets/aerobic.jpg"
import img4 from "../assets/abs.jpg"

export const Card = ({ img, position, level, title }) => {
    return (
        <Box py={9}>
            <Flex flexDir={["column", "row"]} justifyContent="center" alignItems="center">
                <Box
                    w="180px"
                    height="180px"
                    backgroundImage={img}
                    backgroundPosition={position}
                    backgroundSize="cover"
                    mr={[0, 8, 8]}
                    borderRadius="50%"
                />
                <Box
                    w={["100%", "50%", "65%"]}
                    mt={5}
                    textAlign={["center", "initial", "initial"]}
                >
                    <Heading as="h4" size="md">{level}</Heading>
                    <Heading as="h3" size="xl" color="green.500">{title}</Heading>
                    <Text color="gray" py={2} maxWidth="400px" fontSize={15}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem alias repellat corrupti sed rem sit officiis dicta, esse eius, atque dolorum praesentium.</Text>
                    <Button variant="ghost" colorScheme="gray">View Workouts <BsArrowRightShort style={{ marginLeft: "5px", fontSize: "20px" }} /></Button>
                </Box>
            </Flex>
        </Box>
    )
}

export const Workouts = () => {
    return (
        <Box pb={20}>
            <Container maxW="container.xl">
                <SectionTitle title="WORKOUTS" subtitle="Our exclusive training session just for you. Create your style" />
                <Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={1}>
                    <Box>
                        <Card img={img1} position="center" level="Beginner Level" title="Basic Weights" />
                    </Box>
                    <Box>
                        <Card img={img2} position="right" level="Intermediate Level" title="Muscle-Building" />
                    </Box>
                    <Box>
                        <Card img={img4} position="top" level="Advanced Level" title="Abs Workout" />
                    </Box>
                    <Box>
                        <Card img={img3} position="center" level="Advanced Level" title="Aerobics Program" />
                    </Box>
                </Grid>
            </Container >
        </Box>
    )
}