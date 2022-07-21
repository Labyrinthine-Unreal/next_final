import { Box } from "@chakra-ui/react"
export default function CustomContainer({children}){
    return(
        <Box bg="white" width="full" height="full" rounded="lg" textAlign="left">
            {children}
        </Box>
    )
}