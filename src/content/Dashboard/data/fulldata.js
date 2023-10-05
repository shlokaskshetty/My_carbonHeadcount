//if you want the data as normal variables instead of states
//import the data of all rows into this variable
//replace RHS of the equation as necessary


// if you need the variables as states instead, then uncomment this block of code
/*
import { useState } from "react";
const [fulldata,setFullData]=useState({})
*/

//else, import all values in dataabse into this variable
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FULLdata = () => {
  const [responseFromCouchDB, setResponseFromCouchDB] = useState({rows:[]});
  
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/getfulldata')
      .then((response) => {
        // Process the response and extract the data
        setResponseFromCouchDB(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Fetch data when the component mounts


  return {
    getFullData: ()=> responseFromCouchDB,
  };
};
export default FULLdata;