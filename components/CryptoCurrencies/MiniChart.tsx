import React from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut,Line } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
import {CategoryScale , Chart as ChartJs,LineElement,LinearScale,PointElement,Filler } from 'chart.js'; 
import { FaSleigh } from "react-icons/fa";
import { Grid } from "swiper";
import hexToRgba from "hex-to-rgba";
import {  registerables } from 'chart.js'

Chart.register(...registerables)

  interface Props  {
    historyCoin:  HistoryCoin
    color:string
  }

const MiniChart = ({historyCoin ,color}:Props) => {

  const backgroundColor = hexToRgba(color,"0.1")


const coinPrice = []
const coinTimeStamp = []

for (let i =0 ; i < historyCoin?.history.length ; i++) {
   coinPrice.push(historyCoin.history[i].price)
  const date = new Date (historyCoin.history[i].timestamp*1000)
  const dateFormat = date.getHours() + ":" + date.getMinutes(); 
  coinTimeStamp.push(dateFormat)
}


    const data ={
        labels: coinTimeStamp,
        datasets: [{
          label:" Price in USD ",
          fill:true,
            data:coinPrice,
            backgroundColor:backgroundColor,
            borderColor:color,
            pointBorderColor:"#00000000",
            pointBorderWidth:0.5,
            tension:0.4,
            hoverBackgroundColor:color,
            
        }]
    }

    const options = {
      plugins:{
        legend: {
         display: false
        },
    
      },
      responsive:true,
      
      scales:{
        x: {
          min: 0,
          max: 20,
          reverse: true,
          beginAtZero: true,
          ticks:{
            display: false
          },
          grid:{
            display:false
          }
        },
        y: {
          
          ticks:{
            stepSize: 100,
            display: false
          },
          grid:{
            display:false
          }
        }
      },
      
    }

  return (
    <div className=" w-[100px] lg:w-[200px] lg:h-[100%] xl:w-full xl:h-full   ">
      <Line data={data} options={options}/>
    </div>
  );
};

export default MiniChart;
