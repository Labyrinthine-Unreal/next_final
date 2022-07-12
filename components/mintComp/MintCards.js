import { SimpleGrid } from "@chakra-ui/react"
import CardEntry from "./CardEntry"
import properties from "@/components/data/properties"
import Refresh from "@/components/mintComp/Refresh"

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
            <Refresh />
        </SimpleGrid>
    )
}