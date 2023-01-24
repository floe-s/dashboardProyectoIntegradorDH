import React from 'react';
import {useState, useEffect} from 'react';
import Chart from 'react-apexcharts';
import './Ranking.css';


const Ranking = () => {

  const [subject, setSubject] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3002/api/all-products')
    .then(res => { return res.json()
    .then(curso => {
      console.log(curso);
      setSubject(curso.data)
    })
    .catch(error =>
      console.log(error)
    )
    }) 
  }, [])

  console.log(subject);

  const data = {
    series: [
      {
        name: "Cantidad",
        data: [3, 1, 2, 6, 4],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: "auto",
      },

      plotOptions: {
        bar: {
          barHeight: '100%',
          distributed: false,
          horizontal: true,
          dataLabels: {
            position: 'bottom',
          },
        }
      },

        dataLabels: {
          enabled: true,
          textAnchor: 'start',
          style: {
            colors: ["#fff"]
          },
          formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] /* + ":  " + val */
          },
          offsetX: 0,
                dropShadow: {
                  enabled: true
                }
          },

          stroke: {
            width: 1,
            colors: ['#fff']
          },
          xaxis: {
            categories: ['Inglés', 'Español', 'Coreano', 'Portugués', 'Alemán'
            ],
            labels: {
              show: false
            }
          },
          yaxis: {
            labels: {
              show: false
            }
          },
          grid: {
            show: false,
          },
    },
  };

  return <div className="Ranking">
        <Chart options={data.options} series={data.series} type="bar" />
  </div>;
};

export default Ranking;