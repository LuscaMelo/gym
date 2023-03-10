import { HamburgerIcon, CloseIcon, PhoneIcon } from "@chakra-ui/icons"
import { Flex, Link, Container, Heading, Button } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import bg from "../assets/mobile.png"

export const NavBar = () => {

    const navItems = ["HOME", "PROGRAMS", "PLANS", "TESTMONIALS", "ABOUT US"]

    const [mobile, setMobile] = useState(false)
    const [menu, setMenu] = useState("none")
    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        window.addEventListener("scroll", changeMenuColor)
    }, [scrollY]);

    function handleMobile() {
        setMobile(!mobile)
        menu == "none" ? setMenu("flex") : setMenu("none")
    }

    function changeMenuColor() {
        if (scrollY <= 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    return (
        <>
            <Flex as="nav" w="100%" h="95px" alignItems="center" bg={["#020202", "#020202", scroll ? "transparent" : "#020202"]} position="fixed" top="0" zIndex="1">
                <Container maxW="container.xl" display="flex" alignItems="center" justifyContent="space-between">
                    <Link href="/" _hover={{
                        textDecoration: "none"
                    }}>
                        <Heading color="green.400" fontSize={29}>GYM.</Heading>
                    </Link>
                    <Flex alignItems="center" display={["none", "none", "block"]}>
                        {navItems.map((item, index) => (
                            <Link as="b" key={index}
                                color="white"
                                pl={8}
                                letterSpacing="1px"
                                fontSize={14}
                                transition="0.5s"
                                _hover={{
                                    textDecoration: "none",
                                    color: "green.400"
                                }}
                            >{item}</Link>
                        ))}
                    </Flex>

                    <Flex display={["block", "block", "none"]}>
                        <Button colorScheme="green" bg="transparent"
                            _hover={{
                                backgroundColor: "none"
                            }}
                            onClick={handleMobile}
                        >
                            {mobile ? <CloseIcon color="white" w={5} h={5} /> : <HamburgerIcon color="white" w={8} h={8} />}
                        </Button>
                    </Flex>
                </Container>
            </Flex >

            <Flex
                display={menu}
                backgroundImage={bg}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                backgroundPosition="center"
                transition="0.5s"
                position="fixed"
                zIndex="1"
                top="90px"
                flexDirection="column"
                pt={20}
                h="100vh"
                w="100%"
                alignItems="center"
                color="white">
                {navItems.map((item, index) => (
                    <Link as="b" key={index}
                        color="white"
                        py={6}
                        px={20}
                        letterSpacing="1px"
                        fontSize={14}
                        transition="0.5s"
                        _hover={{
                            textDecoration: "none",
                            color: "green.400"
                        }}
                    >{item}</Link>
                ))}
                <Button
                    bg="green.400"
                    size="md"
                    ml={6}
                    mr={4}
                    mt={5}
                    fontWeight="bold"
                    _hover={{
                        color: "white"
                    }}>
                    <PhoneIcon mr={2} /> +55 12345-6789
                </Button>
            </Flex>
        </>
    )
}