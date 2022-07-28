import { Box } from "@chakra-ui/react"
export default function CustomContainer({children}){
    return(
        <Box bg="white" width="full" height="full" pr={10} pv="10" rounded="lg" textAlign="left">
            {children}
        </Box>
    )
}