import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [data,setData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/testing")
      .then((response) => {
        setData(response.data)
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return <div>
    <p>hello</p>
  </div>;
};

export default Home;
