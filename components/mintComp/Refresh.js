import React from "react";
import { Button } from "@chakra-ui/react";
export default function Refresh() {

  const refreshPage = ()=>{
     window.location.reload();
  }

  return (
    <div>
      <Button onClick={refreshPage}>Refresh</Button>
    </div>
  );
}