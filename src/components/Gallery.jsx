import { Flex, Container, SimpleGrid, Image, Button } from "@chakra-ui/react"
import { SectionTitle } from "./SectionTitle"
import { BsArrowRightShort } from "react-icons/bs"
import img1 from "../assets/galery1.jpg"
import img2 from "../assets/galery2.jpg"
import img3 from "../assets/galery3.jpg"
import img4 from "../assets/galery4.jpg"

const imgs = [{ img: img1, id: 1 }, { img: img2, id: 2 }, { img: img3, id: 3 }, { img: img4, id: 4 }]

export const Gallery = () => {
    return (
        <Flex>
            <Container maxW='4xl' display="flex" flexDir="COLUMN" justifyContent="center" pb={8}>
                <SectionTitle title="GALLERY" subtitle="see some pictures of our environments" />
                <SimpleGrid columns={[1, 2, 2]} spacing={5}>
                    {imgs.map((img) => (
                        <Image src={img.img} key={img.id} ></Image>
                    ))}
                </SimpleGrid>
                <Button variant="ghost" colorScheme="gray" ml="auto" mt={3}>View more <BsArrowRightShort fontSize={22} ml={2} /></Button>
            </Container>
        </Flex>
    )
}
