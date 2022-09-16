import { Button, Image } from '@chakra-ui/react'

export default function Wallets(props) {

    return (
        <Button leftIcon={<Image src={props.icon} w="2em" h="2em" mr="2" />}>
            {props.name}
        </Button>
    )
}