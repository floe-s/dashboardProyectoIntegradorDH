import React, {useState, useEffect}  from 'react';
import './Updates.css';
import img1 from "../../img/urban-user.png";


const Updates = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/all-users')
    .then(res => { return res.json()
    .then(curso => {
      console.log(curso);
      setUsers(curso.data)
    })
    .catch(error =>
      console.log(error)
    )
    }) 
  }, [])

  console.log(users);


  return (
    <div className="Updates">
      {users.map((update) => {
        return (
          <div className="update">
            <img src={img1} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.nombre}</span>
                <span> {update.apellido}</span>
              </div>
                <span>{update.email}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;