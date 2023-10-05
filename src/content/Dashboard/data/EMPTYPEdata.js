// if you need the variables as states instead, then uncomment this block of code
/*
import { useState } from "react";
const [EMPTYPEdata,setEMPTYPEData]=useState({})
*/

//else, import the data of Employee type into this variable

/*const EMPTYPEdata={"rows":[
    {key:[2000,1,null,null,"P","Danny"],value:1},
    {key:[2000,2,2001,2,"T","Georgia"],value:2},
    {key:[2000,3,null,null,"P","Erin"],value:2},
    {key:[2000,4,2002,1,"P","Georgia"],value:1}
]}
export default EMPTYPEdata;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EMPTYPEdata = () => {
  const [responseFromCouchDB, setResponseFromCouchDB] = useState({rows:[]});

  useEffect(() => {
    axios.get('http://localhost:5000/api/getEmpTypeData')
      .then((response) => {
        console.log("got emp dATA")
        console.log(response.data)
        // Process the response and extract the data
        setResponseFromCouchDB(response.data);
      })
      .catch((error) => {
        console.log("Emp data fialed")
        console.error('Error fetching data:', error);
      });
  }, []); // Fetch data when the component mounts

  return {
    getEmpTypeData: ()=> responseFromCouchDB,
  };
};
export default EMPTYPEdata;