import React from "react";
// import "@styles/Auctions.module.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "../components/images/logo.png";
import { ConnectButton, Icon, Button, useNotification } from "web3uikit";
import AuctionsMap from "../components/AuctionsMap";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import User from "../components/User";
import { useRouter } from "next/router";
import { Spacer } from "@chakra-ui/react/dist/chakra-ui-react.cjs";


export default function Auctions() {
  const router = useRouter();
  // const { state: searchFilters } = useLocation();
  
  // const [highLight, setHighLight] = useState();
  // const { Moralis, account } = useMoralis();
  // const [auctionsList, setauctionsList] = useState();
  // const [coOrdinates, setCoOrdinates] = useState([]);
  // const contractProcessor = useWeb3ExecuteFunction();
  // const dispatch = useNotification();
  const AuctionsList = [
    {
      attributes: {
        city: "Bacchanalia",
        descriptionOne: "Auction 1",
        descriptionTwo: "Woof woof for me please",
        imgUrl:
          "https://ipfs.io/ipfs/QmRZv2uTXKEnjghLGeMp2x8UY6x3sx3tfjDd5vyu3SBzBS?filename=gallery.png",
        lat: "40.716862",
        long: "-73.999005",
        name: "Bacchanalia",
        pricePerDay: "0.05",
      },
    },
  ];

  // const handleSuccess= () => {
  //   dispatch({
  //     type: "success",
  //     message: `Nice! You are going to ${searchFilters.destination}!!`,
  //     title: "Booking Succesful",
  //     position: "topL",
  //   });
  // };

  // const handleError= (msg) => {
  //   dispatch({
  //     type: "error",
  //     message: `${msg}`,
  //     title: "Booking Failed",
  //     position: "topL",
  //   });
  // };

  // const handleNoAccount= () => {
  //   dispatch({
  //     type: "error",
  //     message: `You need to connect your wallet to book an auction`,
  //     title: "Not Connected",
  //     position: "topL",
  //   });
  // };


  // useEffect(() => {
  //   async function fetchauctionsList() {
  //     const auctions = Moralis.Object.extend("auctions");
  //     const query = new Moralis.Query(auctions);
  //     query.equalTo("city", searchFilters.destination);

  //     const result = await query.find();

      let cords = [];
      AuctionsList.forEach((e) => {
        cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
      });

  //     setCoOrdinates(cords);
  //     setauctionsList(result);
  //   }

  //   fetchauctionsList();
  // }, [searchFilters]);


  // const bookauction = async function (start, end, id, dayPrice) {
    
  //   for (
  //     var arr = [], dt = new Date(start);
  //     dt <= end;
  //     dt.setDate(dt.getDate() + 1)
  //   ) {
  //     arr.push(new Date(dt).toISOString().slice(0, 10)); // yyyy-mm-dd
  //   }

  //   let options = {
  //     contractAddress: "0xd3bF0B852C0229f0651969670Cd5A8C9442F2910",
  //     functionName: "addAucionsBooked",
  //     abi: [
  //       {
  //         "inputs": [
  //           {
  //             "internalType": "uint256",
  //             "name": "id",
  //             "type": "uint256"
  //           },
  //           {
  //             "internalType": "string[]",
  //             "name": "newAuctions",
  //             "type": "string[]"
  //           }
  //         ],
  //         "name": "addAuctionsBooked",
  //         "outputs": [],
  //         "stateMutability": "payable",
  //         "type": "function"
  //       }
  //     ],
  //     params: {
  //       id: id,
  //       newBookings: arr,
  //     },
  //     msgValue: Moralis.Units.ETH(dayPrice * arr.length),
  //   }
  //   console.log(arr);

  //   await contractProcessor.fetch({
  //     params: options,
  //     onSuccess: () => {
  //       handleSuccess();
  //     },
  //     onError: (error) => {
  //       handleError(error.data.message)
  //     }
  //   });

  // }


  return (
    <>
      <div className="topBanner">
        <div>


          {/* <Link to="/">
            <img className="logo" src={logo} alt="logo"></img>
          </Link> */}


        </div>
        <div className="searchReminder">
{/*         <div className="filter">{searchFilters.destination}</div> */}
          <div className="vl" />
          <div className="filter">
{/* {`
           ${searchFilters.Enter.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.Enter.toLocaleString("default", {
             day: "2-digit",
           })} 
           -  
*/}

           {/* ${searchFilters.Exit.toLocaleString("default", {
             month: "short",
           })} 
           ${searchFilters.Exit.toLocaleString("default", {
             day: "2-digit",
           })}
          `}
*/}
          
          </div>
          <div className="vl" />
          <div className="searchFiltersIcon">
            <Icon fill="#ffffff" size={20} svg="search" />
          </div>
        </div>
        <div className="lrContainers">
          {/* {account &&
          <User account={account} />
        } */}
          {/* <ConnectButton /> */}
        </div>
      </div>

      <hr className="line" />
      <div className="AuctionsContent">
        <div className="AuctionsContentL">
          Current auctions For Chosen Date
          <Spacer />
          {AuctionsList &&
            AuctionsList.map((e, i) => {
              return (
                <>
                  <hr className="line2" />
                  {/* <div className={highLight == i ? "auctionDivH " : "auctionDiv"}> */}
                  <div className="auctionDiv">
                    <img className="auctionImg" src={e.attributes.imgUrl}></img>
                    <div className="auctionInfo">
                      <div className="auctionTitle">{e.attributes.name}</div>
                      <div className="auctionDesc">
                        {e.attributes.descriptionOne}
                      </div>
                      <div className="auctionDesc">
                        {e.attributes.descriptionTwo}
                      </div>
                      <div className="bottomButton">
                        <Button 
                        // onClick={() => {
                        //   if(account){
                        //   bookauction(
                        //     searchFilters.Enter,
                        //     searchFilters.Exit,
                        //     e.attributes.uid_decimal.value.$numberDecimal,
                        //     Number(e.attributes.pricePerDay_decimal.value.$numberDecimal)
                        //   )}else{
                        //     handleNoAccount()
                        //   }
                        // }
                        // }
                        text="Enter Auction" />
                        <div className="price">
                          <Icon fill="#808080" size={20} svg="eth" />
                          {e.attributes.pricePerDay} 
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="auctionsContentR">
          <AuctionsMap locations={cords} />
        </div>
      </div>
    </>
  );
};

