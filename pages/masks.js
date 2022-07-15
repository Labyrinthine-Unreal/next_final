import { Box, SimpleGrid } from "@chakra-ui/react"
import properties from "@components/data/properties"
import MintAnimation from "@components/mintComp/MintAnimation"
import MintTitle from "@components/mintComp/MintTitle"
import MintPrice from "@components/mintComp/MintPrice"
import MintButton from "@components/mintComp/MintButton"

export default function MasksPage() {
    const item = properties[2];
            
    return (
        <Box>
            <SimpleGrid
            columns={{md: 2, sm: 1}} 
                width="100vw"
                height="50vw"
            >
                <Box pt={100} align='right' pr={10}>
                    <Box maxW='260' borderWidth='1px' bg='white' borderRadius='lg' overflow="scroll">
                    <MintAnimation 
                        src={item.imageUrl}
                        alt={item.imageAlt}
                    />
                    <Box p='6' h={50}>
                        <MintTitle 
                            title={item.title}
                        />
                        <Box h={10} textAlign='center' as='span' color='gray.600' fontSize='smaller'>
                            <MintPrice
                                presalePrice={item.presalePrice}
                                salePrice={item.salePrice}
                            />
                        </Box>
                    </Box>
                    <Box display='flex' h={20} py={12} justifyContent='center'>
                        <MintButton />
                    </Box>
                </Box>
                </Box>
                <Box maxW='400' pt={100} pl={10} align='left'>
                    <Box 
                        mt='1'
                        fontSize='sm'
                        as='h6'
                        lineHeight='tight'
                        textAlign='left'
                        verticalAlign='baseline'
                    >
                        {item.description}
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>
    )
}