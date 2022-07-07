import { SimpleGrid } from "@chakra-ui/react"
import CardEntry from "./CardEntry"
import properties from "../data/properties"


function CreateEntry(property) {
    return (
        <CardEntry 
            key={property.id}
            image={property.imageUrl}
            alt={property.imageAlt}
            title={property.title}
            presalePrice={property.presalePrice}
            salePrice={property.salePrice}
            info={property.info}
            href={property.href}
        />
    )
}

export default function MintCard() {
    return (
        <SimpleGrid columns={{md: 2, sm: 1}} spacing={24} spacingY={10}>
            {properties.map(CreateEntry)}
        </SimpleGrid>
    )
}