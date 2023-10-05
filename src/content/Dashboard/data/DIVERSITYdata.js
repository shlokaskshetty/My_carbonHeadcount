
// if you need the variables as states instead, then uncomment this block of code
/*
const [DIVERSITYdata,setDIVERSITYData]=useState({})
*/

//else, import the data of Diversity into this variable




//----------------------------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DIVERSITYdata = () => {
  const [responseFromCouchDB, setResponseFromCouchDB] = useState({rows:[]});

  useEffect(() => {
    axios.get('http://localhost:5000/api/getDiversityData')
      .then((response) => {
        setResponseFromCouchDB(response.data);
      })
      .catch((error) => {
        console.log("Nooooooo")
        console.error('Error fetching data from the server:', error);
      });
  }, []);

  return {
    getDiversityData: ()=> responseFromCouchDB,
  };
};
export default DIVERSITYdata;

