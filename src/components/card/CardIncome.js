import React, {useState, useEffect} from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {UilUsdSquare} from "@iconscout/react-unicons";

// parent Card
const CardIncome = () => {

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
        background: "linear-gradient(180deg, #f5a27d 0%, #f3a784 100%)",
        boxShadow: "0px 10px 20px 0px #ffb18f",
      }}
    >

      <div className="radialBar">
        <CircularProgressbar
          value={60}
          text={`${60}%`}
        />
        <span>{"Acumulado"}</span>
      </div>
      <div className="detail">
        <UilUsdSquare/>
        <span>${data.length}</span>
        <span>Importe</span>
      </div>
      </div>

  );
};

export default CardIncome;