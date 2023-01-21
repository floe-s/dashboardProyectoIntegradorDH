import React from 'react';
import Chart from 'react-apexcharts';


const Ranking = () => {

  const data = {
    series: [
      {
        name: "Ranking",
        data: [1, 2, 3, 4, 5],
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
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy'
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