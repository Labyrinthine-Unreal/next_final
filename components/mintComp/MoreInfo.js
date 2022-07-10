import { Tooltip, Box } from '@chakra-ui/react'
import Link from 'next/link'

export default function MoreInfo(props) {
    return (
        
        <Link href={props.href}>
          <Box><Tooltip hasArrow arrowSize={12} label="Click for more info" bg="#6082B6">{props.info}</Tooltip></Box>
        </Link>
    )
}