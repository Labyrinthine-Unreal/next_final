import React from "react";
import { Icon, Button, useNotification } from "web3uikit";
import AuctionsMap from "../components/AuctionsMap";
import { useState, useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useRouter } from "next/router";


export default function Auctions() {
  const router = useRouter();
  const { query: searchFilters } = useRouter();
  
  // const [highLight, setHighLight] = useState();
  
  const { Moralis, account } = useMoralis();
  const [auctionsList, setAuctionsList] = useState();

  const [coOrdinates, setCoOrdinates] = useState([]);
  const contractProcessor = useWeb3ExecuteFunction();
  // const dispatch = useNotification();

  // const handleSuccess= () => {
  //   dispatch({
  //     type: "success",
  //     message: `Nice! Your bid has been placed ${searchFilters.destination}!!`,
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


  useEffect(() => {
    async function fetchAuctionsList() {
      await Moralis.start({ 
        serverUrl:"https://d8tdshnwaepb.usemoralis.com:2053/server", 
        appId:"dqkfmKHCu1vl17sLEOFgJ9RnwsJyrMgsqNLKTgQE", 
        masterKey:"nCOMVxCN1LDmsbmor74UPEhALoUYG0XrFvvtMQdR"  
      });

      const auctions = Moralis.Object.extend("Listings1");
      const state = new Moralis.Query(auctions);
      // state.startsWith("city","Bacchanalia");
      
      const result = await state.find();
      console.log(state)


      // let cords = [];
      // result.forEach((e) => {
      //   cords.push({ lat: e.attributes.lat, lng: e.attributes.long });
      // });
      // console.log(cords)

      // setCoOrdinates(cords);
      setAuctionsList(result);
    }

    fetchAuctionsList();
  }, [searchFilters]);


  // const bookauction = async function (start, end, id, dayPrice) {
    
  //   for (
  //     var arr = [], dt = new Date(start);
  //     dt <= end;
  //     dt.setDate(dt.getDate() + 1)
  //   ) {
  //     arr.push(new Date(dt).toISOString().slice(0, 10)); // yyyy-mm-dd
  //   }

  //   let options = {
  //     contractAddress: "0xfEedE245161879423441D8735CFaaa086318Cc1e",
  //     functionName: "addAuctionsBooked",
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
  //       newAuctions: arr,
  //     },
  //     msgValue: Moralis.Units.ETH(dayPrice * arr.length),
  //   }
  //   console.log(arr);

  //   await contractProcessor.fetch({
  //     params: options,
  //     // onSuccess: () => {
  //     //   handleSuccess();
  //     // },
  //     // onError: (error) => {
  //     //   handleError(error.data.message)
  //     // }
  //   });

  // }


  return (
    <>
      <div className="topBanner">
        <div>


        </div>
        <div className="searchReminder">
        {/* <div className="filter">{searchFilters.destination}</div> */}
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
        </div>
      </div>

      <hr className="line" />
      <div className="AuctionsContent">
        <div className="AuctionsContentL">
          |Current auctions For Chosen Date|
          <ul></ul>
          {/* <Spacer /> */}
          {auctionsList &&
            auctionsList.map((e, i) => {
              return (
                <>
                  <hr className="line2" />
                  {/* <div className={highLight == i ? "auctionDivH " : "auctionDiv"}> */}
                  <div className="auctionDiv">
                    <img className="auctionImg" src={e.attributes.imgUrl}></img>
                    <div className="auctionInfo">
                      {/* <div className="auctionTitle">{e.attributes.name}</div> */}
                      <div className="auctionDesc">
                        {e.attributes.descriptionOne}
                      </div>
                      <div className="auctionDesc">
                        {e.attributes.descriptionTwo}
                      </div>
                      <div className="bottomButton">
                        <Button 
                        onClick={() => {
                          if(account){
                          bookauction(
                            searchFilters.Enter,
                            searchFilters.Exit,
                            e.attributes.uid_decimal.value.$numberDecimal,
                            Number(e.attributes.pricePerDay_decimal.value.$numberDecimal)
                          )}
                        }
                        }
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
        {/* <div className="auctionsContentR">
          <AuctionsMap locations={coOrdinates} />
        </div> */}
      </div>
    </>
  );
};

