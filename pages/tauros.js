import Head from 'next/head'
import { Box, SimpleGrid, Flex } from "@chakra-ui/react"
import properties from "@components/data/properties"
import MintAnimation from "@components/mintComp/MintAnimation"
import MintTitle from "@components/mintComp/MintTitle"
import MintPrice from "@components/mintComp/MintPrice"
import MintButtonTauros from "@components/mintComp/MintButtonTauros"

export default function TaurosPage() {
    const item = properties[0];
            
    return (
        <Box>
            <Head>
                <title>
                    Mint TAUROS
                </title>
            </Head>
            <Flex direction="column" alignItems="center" width="100%" pt={70} p={20}>
                <SimpleGrid columns={{md: 2, sm: 1}} spacing={10} spacingY={10}>
                    <Box maxW='260' h={490} borderWidth='1px' bg='#ffffffbb' borderRadius='lg' overflow="scroll">
                        <MintAnimation src={item.imageUrl} alt={item.imageAlt} />
                        <Box p='6' h={50} textAlign="left">
                            <MintTitle title={item.title} />
                            <Box h={10} textAlign='left' as='span' color='gray.600' fontSize='13px'>
                                <MintPrice presalePrice={item.presalePrice} salePrice={item.salePrice} />
                            </Box>
                        </Box>
                        <Box display='flex' h={20} py={12} pl={4} justifyContent='center'>
                            <MintButtonTauros />
                        </Box>
                    </Box>

                    <Box maxW='300' borderRadius='lg'>
                        <Flex maxW='400' align='left'>
                            <Flex mt='1' fontSize='sm' as='h6' lineHeight='tight' textAlign='left' verticalAlign='baseline'>
                                {item.description}
                            </Flex>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}