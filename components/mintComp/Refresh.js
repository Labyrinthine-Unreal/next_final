import React from "react";
import { Button } from "@chakra-ui/react";
export default function Refresh() {

  const refreshPage = ()=>{
     window.location.reload();
  }

  return (
    <div>
      {/* <h1>{Math.random()}</h1> */}
      <Button onClick={refreshPage}>Refresh</Button>
    </div>
  );
}