import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./home.scss";

const Home = ({ type }) => {
  const [lists,setLists]=useState([]);
  useEffect(()=>
  {
    const getRandomLists = async () => 
    {
      try {
        
      } catch (error) {
        console.log(error);
        
      }
    }
  })
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
