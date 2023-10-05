// if you need the variables as states instead, then uncomment this block of code
/*
import { useState } from "react";
const [DOLdata,setDOLData]=useState({})
*/

//else, import the data of DOL into this variable
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DOLdata = () => {
  const [responseFromCouchDB, setResponseFromCouchDB] = useState({rows:[]});
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/getDOLData')
      .then((response) => {
        // Process the response and extract the data
        setResponseFromCouchDB(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Fetch data when the component mounts


  return {
    getDOLData: () => responseFromCouchDB,
  };
};
export default DOLdata;

