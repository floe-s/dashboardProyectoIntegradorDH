import React, {useState, useEffect} from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {UilFileBookmarkAlt} from "@iconscout/react-unicons";

// parent Card
const CardProducts = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/all-products')
    .then(response => response.json())
    .then(datos => {
            console.log(datos)
            setData(datos.data)
        });
  }
  ,[]);

  return (
    <div
      className="CompactCard"
      style={{
        background: "linear-gradient(180deg, #a8e3b5 0%, #a2e0af 100%)",
        boxShadow: "0px 10px 20px 0px #8eeda4",
      }}
    >

      <div className="radialBar">
        <CircularProgressbar
          value={70}
          text={`${70}%`}
        />
        <span>{"Cursos"}</span>
      </div>
      <div className="detail">
        <UilFileBookmarkAlt/>
        <span>{data.length}</span>
        <span>Creados</span>
      </div>
      </div>

  );
};

export default CardProducts;