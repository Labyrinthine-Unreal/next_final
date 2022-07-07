import { Box } from "@chakra-ui/react"

export default function MintPrice(props) {
    return (
        <div style={{width: "160px"}}>
            <div>
                <b>Presale:</b> {props.presalePrice}
            </div>
            <div>
                <b>Sale:</b> {props.salePrice}
            </div>
        </div>
           
    )
}