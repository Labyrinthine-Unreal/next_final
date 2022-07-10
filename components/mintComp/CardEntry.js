import { Box, Flex, SimpleGrid } from "@chakra-ui/react"
import MintAnimation from "./MintAnimation"
import MintTitle from "./MintTitle"
import MintButtonEstatesFront from "./MintButtonEstatesFront"
import MintButton from "./MintButton"
import MintPrice from "./MintPrice"
import MoreInfo from "./MoreInfo"
import MintButtonTaurosFront from "./MintButtonTaurosFront"

export default function CardEntry(props) {
    return (
        <Box maxW='260' h={490} borderWidth='1px' bg='#ffffffbb' borderRadius='lg' overflow="scroll">
            <MintAnimation 
                src={props.image}
                alt={props.alt}
            />
            <Box p='6' h={50}>
                <MintTitle 
                    title={props.title}
                />
                <SimpleGrid columns={2} h={75} textAlign='left' as='span' color='gray.600' fontSize='13px'>
                    <MintPrice
                        presalePrice={props.presalePrice}
                        salePrice={props.salePrice}
                    />
                    <Flex fontSize="18px" justify="right" align="center" opacity='revert-layer'>
                        <MoreInfo info={props.info} href={props.href} />
                    </Flex>
                </SimpleGrid>
            </Box>
            <Box display='flex' h={20} py={12} pl={4} justifyContent='center'>
                {props.title == "MERCA CITY ESTATES" ? <MintButtonEstatesFront /> : <MintButtonTaurosFront />}
            </Box>
        </Box>
    )
}