import React, {useState, useEffect} from 'react';
/* import { cardsData } from "../../data/Data"; */
import {UilClipboardAlt, UilUsdSquare, UilMoneyWithdrawal} from "@iconscout/react-unicons";
import "./Cards.css";
import Card from '../card/Card';


const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/last-users')
    .then(response => response.json())
    .then(datos => {
            console.log(datos)
            setData(datos.data)
        });
  }
  ,[]);

  const cardsData = [
    {
      title: "Cursos",
      color: {
        backGround: "linear-gradient(180deg, #a8e3b5 0%, #a2e0af 100%)",
        boxShadow: "0px 10px 20px 0px #8eeda4",
      },
      barValue: 70,
      value:"Cant. " + data.length,
      png: UilUsdSquare,
    },
    {
      title: "Acumulado",
      color: {
        backGround: "linear-gradient(180deg, #f5a27d 0%, #f3a784 100%)",
        boxShadow: "0px 10px 20px 0px #ffb18f",
      },
      barValue: 80,
      value: "14,270",
      png: UilMoneyWithdrawal,
    },
    {
      title: "Usuarios",
      color: {
        backGround:
          "linear-gradient(#f8d49a -146.42%, #ffca71 -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: "4,270",
      png: UilClipboardAlt,
    },
  ];

  return(
    <div className="Cards">
     {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}

    </div>
  )
}

export default Cards;