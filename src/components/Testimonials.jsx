import { Box, Container, Text, Grid, Card, CardBody, CardHeader } from "@chakra-ui/react"
import { SectionTitle } from "./SectionTitle"
import { ImQuotesLeft } from 'react-icons/im'

export const MyCard = ({ cardText, name }) => {
    return (
        <Card
            padding={3}
            mb={0}
            pb={0}
            mx={5}
            _hover={[{

            }, {

            }, {
                transform: "scale(1.02)",
                transition: "0.6s ease",
                boxShadow: "0px 59px 20px -37px rgba(0,0,0,0.15)",
            }]}
        >
            <CardHeader>
                <ImQuotesLeft fontSize={40} color="#38a169" />
            </CardHeader>
            <CardBody>
                <Text fontSize={["xs", "sm"]}>{cardText}</Text>
                <Text color="green.400" fontWeight="bold" mt={8}>{name}</Text>
            </CardBody>
        </Card >
    )
}

export const Testimonials = () => {
    return (
        <Box bg="gray.100" pb={1}>
            <Container maxW="container.xl">
                <SectionTitle title="TESTIMONIALS" subtitle="What our clients say about our gym" />
                <Grid templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']} gap="40px" mb={20}>
                    <MyCard cardText="He helped me to bounce back and get to the top of my physical shape again! I'm so grateful for all the help he provided!" name="Samantha Green" />
                    <MyCard cardText="I was quite surprised with a range of services Edward offered me. His group training programs are perfect for beginners." name="John Nelson" />
                </Grid>
            </Container>
        </Box>
    )
}
