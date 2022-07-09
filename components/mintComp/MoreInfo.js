import { Tooltip } from '@chakra-ui/react'
import Link from 'next/link'

export default function MoreInfo(props) {
    return (
      <Tooltip hasArrow arrowSize={12} label="Click for more info" bg="#6082B6">
        <Link href={props.href}>
          {props.info}
        </Link>
      </Tooltip>
           
    )
}