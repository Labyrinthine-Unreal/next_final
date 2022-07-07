import { Box } from "@chakra-ui/react"

export default function MintTitle(props) {
    return (
        <Box 
            mt='1'
            pb={2}
            fontWeight='semibold'
            fontSize='sm'
            as='h6'
            lineHeight='tight'
            textAlign='left'
            verticalAlign='baseline'
        >
            {props.title}
        </Box>
                
    )
}