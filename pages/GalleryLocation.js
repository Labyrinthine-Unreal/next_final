import AuctionsMap from "../components/AuctionsMap";
import { useRouter } from "next/router";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";


export default function Locations() {
    const { Moralis, account, isAuthenticated, user } = useMoralis();

    //useRouter() in place of useLocation()
    const router = useRouter();
    //query in place of state
    const { query: searchFilters } = useRouter();
    const [auctionsList, setAuctionsList] = useState();
    const [coOrdinates, setCoOrdinates] = useState([]);
    useEffect(() => {
        //Initialize API / fetch Gallery Listings
        async function fetchAuctionsList() {
            await Moralis.start({
                serverUrl: "https://d8tdshnwaepb.usemoralis.com:2053/server",
                appId: "dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE",
                masterKey: "nCOMVxCN1LDmsbmor74UPEhALoUYG0XrFvvtMQdR"
            });


            // Refer to @compoents/TaurosList.js
            // TaurosDAO Lists a new Gallery for sale
            //Search API key for the appropriate Dataset from MoralisDB
            const auctions = Moralis.Object.extend("ListingCreated");
            // Query new Gallery Listings Listings
            const state = new Moralis.Query(auctions);

            const result = await state.find();
            console.log(state)

            // CoOrdinates via Google Maps API
            let cords = [];
            result.forEach((e) => {
                cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
            });
            console.log(cords)

            setCoOrdinates(cords);

            // Fill Data
            setAuctionsList(result);
        }
        //Fetch New Gallery Listings
        fetchAuctionsList();
    }, [searchFilters]);


    return (
        <>
            <Box>
                <div className="auctionsContentR">
                    <AuctionsMap locations={coOrdinates} />
                </div>
            </Box>
        </>
    )
}