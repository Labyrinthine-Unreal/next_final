import { SimpleGrid } from "@chakra-ui/react"
import CardEntry from "./CardEntry"
import properties from "@/components/data/properties"


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
        <SimpleGrid columns={{lg: 2, md: 1}} spacing={24} spacingY={20}>
            {properties.map(CreateEntry)}
        </SimpleGrid>
    )
}