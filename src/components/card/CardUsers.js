import React, {useState, useEffect} from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {UilChatBubbleUser} from "@iconscout/react-unicons";

// parent Card
const CardUsers = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://moidi-grupo6.onrender.com/api/all-users')
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
        background: "linear-gradient(#f8d49a -146.42%, #ffca71 -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      }}
    >

      <div className="radialBar">
        <CircularProgressbar
          value={80}
          text={`${80}%`}
        />
        <span>{"Usuarios"}</span>
      </div>
      <div className="detail">
        <UilChatBubbleUser/>
        <span>{data.length}</span>
        <span>Registrados</span>
      </div>
    </div>

  );
};

export default CardUsers;