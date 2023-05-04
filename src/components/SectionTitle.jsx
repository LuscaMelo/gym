import { Flex, Heading, Text } from "@chakra-ui/react"
import { MinusIcon } from "@chakra-ui/icons"

export const SectionTitle = ({ title, subtitle }) => {
    return (
        <Flex flexDirection="column" alignItems="center" pt={20} pb={10}>
            <Heading as="h2" size={["xl", "xl", "2xl"]}>{title}</Heading>
            <MinusIcon w={10} h={10} color="green.400" />
            <Text textAlign="center" fontSize={["sm", "md", "lg"]} px={5}>{subtitle}</Text>
        </Flex>
    )
}
