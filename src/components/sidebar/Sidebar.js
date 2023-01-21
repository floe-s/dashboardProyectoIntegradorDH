import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../img/logo.svg';
import { SidebarData } from '../../data/Data';
import { UilSignOutAlt } from '@iconscout/react-unicons';


const Sidebar = () => {

  const [selected, setSelected] = useState(0);


  return (
    <div className='sidebar'>

    {/*  logo */}
     <div className='logo'>
      <img src= {Logo} alt=""></img>
     </div>

    {/*  menu */}
    <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
      
              <item.icon />
              <span>{item.heading}</span>
            </div>
          );
        })}

        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>

       
      </div>
  );
};

export default Sidebar;