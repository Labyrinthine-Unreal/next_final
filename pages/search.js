import React, { useEffect } from "react";
// import "@styles/Home.module.css"
import { Link } from "@chakra-ui/react";
// import {Link} from "next/link"
import bg from "../components/images/frontpagebg.png";
// import {bg} from "../images/frontpagebg"
import logo from "../components/images/logo.png";
import { ConnectButton,Icon,  Select, DatePicker,Input, Button } from  "web3uikit";
import {useState} from "react";
import { useRouter } from 'next/router'
import { Box, Flex,Grid } from "@chakra-ui/react"


function Redirect({to}){
  const router = useRouter();

  useEffect(()=> {
    router.push(to)
  }, [to]);
  return null;
}

export default function Search(){ 
  const router = useRouter();
  const [Enter, setEnter] = useState(new Date());
  const [Exit, setExit] = useState(new Date());
  const [destination, setDestination] = useState("Bacchanalia");
  const [shouldRedirect, setShouldRedirect] = useState(false);

  if (shouldRedirect){
    return <Redirect to="/Auctions" />;
  }


  return (
    <>
        <div className="containterGradient">
        </div>

      {/* </div> */}

      {/* <div className="topBanner">
        <div>
          <img className="logo" src={logo} alt="" />
        // </div>
        <div className="tabs"> */}
          {/* <div className="selected"> */}
          
          <Grid gap={2000} autoFlow="row">
Locations For Auctions
            {/* </div> */}
Featured Auctions
      Interactive online experiences </Grid>

    <div className="tabContent">
      <div className="searchFields">
        <div className="inputs">
          location
          <Select 
            defaultOptionIndex={0}
            onChange={(data) => setDestination(data.label)}
            options={[

              {
                id: "bac",
                label:"Bacchanalia"
              },
              {
                id:"rit",
                label:"Ritus"
              },
            ]}
           />
        </div>
        <div className="vl"/>

        

        <div className="inputs">
          Auction Start
          <DatePicker 
            id="Enter"
            onChange={(event)=> setEnter(event.date)}
          />
        </div>
        <div className="vl"/>
          


        <div className="inputs">
          Auction End
          <DatePicker 
            id="Exit"
            onChange={(event)=> setExit(event.date)}
          />
        </div>
        <div className="vl"/>
           <Link href={'/Auctions'}  state ={{
          destination: destination,
          Enter: Enter,
          Exit: Exit
        }}>  

         <div className="searchButton">
            <Icon fill="#000000" size={24} svg="search"/>
          </div>

        </Link>  
         
      </div>
    </div>
       <div className="randomLocation">
         <div className="title">Not Finding What You Are Looking For ?</div>
         <div className="text">
           Let us decide a random Auction For You
         </div>

         <Button  
           text = "Explore Auctions"
           onClick={()=> console.log(Exit)} // Returns current time for now
         />
       </div>

    </>
    
  );
  // </Router>
};

