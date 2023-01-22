import React from 'react';
import "./Cards.css";
import CardProducts from '../card/CardProducts';
import CardIncome from '../card/CardIncome';
import CardUsers from '../card/CardUsers';


const Cards = () => {
  return(
    <div className="Cards">
          <div className="parentContainer">
            <CardProducts/>
            <CardIncome/>
            <CardUsers/>
          </div>
    </div>
  )
}

export default Cards;