import React from 'react';
import Ranking from "../ranking/Ranking";
import Updates from '../updates/Updates';
import './RightSide.css';


const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3>Últimos Usuarios Registrados</h3>
        <Updates/>
      </div>
      <div>
        <h3>Cursos por Tema</h3>
        <Ranking/>
      </div>

    </div>
    ) 
}

export default RightSide;
