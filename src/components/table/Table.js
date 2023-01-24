import React, {useState, useEffect} from 'react';
import MUIDataTable from "mui-datatables";

const Table = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/all-products')
    .then(res => { return res.json()
    .then(curso => {
      console.log(curso);
      setProducts(curso.data)
    })
    .catch(error =>
      console.log(error)
    )
    }) 
  }, [])

  console.log(products);


  const columns = [
    {
      name: "id",
      label: "Id",
      options: {filter: true, sort: true}
    },
    {
      name: "nombre",
      label: "Tema",
      options: {filter: true, sort: true}
    },
    {
      name: "precio",
      label: "Precio",
      options: {filter: true, sort: true}
    },
    {
      name: "fecha_creacion",
      label: "Fecha Creación",
      options: {filter: true, sort: true}
    },
  ]

  const options = {
    filterType: 'dropdown',
    rowsPerPage: 3,
    tableBodyHeight: '250px',
    responsive: 'vertical',
  };
  

  return(
    <MUIDataTable
  title={"Lista de Cursos"}
  data={products}
  columns={columns}
  options={options}
  />
  )
}


export default Table;