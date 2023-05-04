import { Flex, Container, Link, Heading, Text } from "@chakra-ui/react"
import { BsTwitter, BsFacebook, BsGoogle, BsLinkedin, BsGithub } from "../../node_modules/react-icons/bs"


export const Footer = () => {
    return (
        <>
            <Flex bg="#0a0a0a" color="white" py={20}>
                <Container maxW="3xl">
                    <Flex flexDir="column" justifyContent="center" alignItems="center" textAlign="center" gap={8}>
                        <Heading color="green.400" fontSize={29}>GYM.</Heading>
                        <Text fontSize="sm" color="gray" px={5}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat aliquam culpa ad eveniet.
                        </Text>
                        <Flex gap={3} fontSize="20px">
                            <BsTwitter cursor="pointer" />
                            <BsFacebook cursor="pointer" />
                            <BsGoogle cursor="pointer" />
                            <BsLinkedin cursor="pointer" />
                            <BsGithub cursor="pointer" />
                        </Flex>
                    </Flex>
                </Container>
            </Flex >
            <Flex backgroundColor="#020202" py={5} justifyContent="center">
                <Text color="gray" textAlign="center" fontSize="xs">Copyright ©2023 GYM. Design by <Link href="https://www.linkedin.com/in/lucasmelodesenvolvedor/" target="_blank" color="green.600" fontWeight="bold" fontSize="sm" letterSpacing="0.5px">Lucas Melo</Link></Text>
            </Flex>
        </>
    )
}
