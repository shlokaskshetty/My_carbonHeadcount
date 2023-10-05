import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LOCATIONdata = () => {
  const [responseFromCouchDB, setResponseFromCouchDB] = useState({rows:[]});
  useEffect(() => {
    axios.get('http://localhost:5000/api/getlocationdata')
      .then((response) => {
        // Process the response and extract the data
        setResponseFromCouchDB(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Fetch data when the component mounts

  return {
    getLocationData: ()=> responseFromCouchDB,
  };
};
export default LOCATIONdata;