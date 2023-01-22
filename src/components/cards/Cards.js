import React from 'react';
import "./Cards.css";
import CardProducts from '../card/CardProducts';
import CardIncome from '../card/CardIncome';
import CardUsers from '../card/CardUsers';


const Cards = () => {
  return(
    <div className="Cards">
            <CardProducts/>
            <CardIncome/>
            <CardUsers/>
    </div>
  )
}

export default Cards;