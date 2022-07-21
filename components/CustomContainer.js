import { Box } from "@chakra-ui/react"
export default function CustomContainer({children}){
    return(
        <Box width="full" height="full" pv="10" align="right">
            {children}
        </Box>
    )
}