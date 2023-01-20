import React from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut,Line } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
import {CategoryScale , Chart as ChartJs,LineElement,LinearScale,PointElement,Filler, } from 'chart.js'; 
import { FaSleigh } from "react-icons/fa";
import { Grid } from "swiper";
import hexToRgba from "hex-to-rgba";
import { Chart as ChartJS } from 'chart.js/auto'
import millify from "millify";
import {  registerables } from 'chart.js'
import gradient from 'chartjs-plugin-gradient';
Chart.register(gradient);

Chart.register(...registerables)


  interface Props  {
    historyCoin:  HistoryCoin
    color:string,
    period:string
  }

const BigChart = ({historyCoin ,color ,period}:Props) => {
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const backgroundColor = hexToRgba(color || "000" ,"0.2")
  const backgroundColorTwo = hexToRgba(color || "000" ,"0.6")

const coinPrice = []
const coinTimeStamp = []



for (let i =0 ; i < historyCoin?.history.length ; i++) {
    const array = historyCoin.history[i].price
  
   coinPrice.push(historyCoin.history[i].price)
  const date = new Date (historyCoin.history[i].timestamp*1000)
  if (period === "24h" || period ==="3h"){
    const dateFormat =  date.getHours() + ":" + date.getMinutes(); 
    coinTimeStamp.push(dateFormat)
  }else if (period === "7d" || period === "30d") {
    const dateFormat = date.getDate()+ " " + month[date.getMonth()]
    coinTimeStamp.push(dateFormat)
  }else if (period === "3m" || period === "1y") {
    const dateFormat =  month[date.getMonth()]
    coinTimeStamp.push(dateFormat)
  }else if (period === "5y" || period === "3y" || period === "all") {
    const dateFormat =  month[date.getMonth()] +" "+ date.getFullYear()
    coinTimeStamp.push(dateFormat)
  }
}


    const data ={
     
        labels: coinTimeStamp,
        datasets: [{
          label:"Price $",
          fill:true,
          font:50,
            data:coinPrice,
           backgroundColor: (context)=>{
            console.log(context)
            const chart = context.chart
            const {ctx,chartArea}=chart
            if(!chartArea){
              return null
            }else return getGradient(chart)
            
           },
           borderColor:color,
           pointBackgroundColor:"#00000000",
           pointBorderColor:"#00000000",
            pointBorderWidth:2,
            tension:0.4,
       
            hoverBackgroundColor:"white"
        }]

    }

    const options = {

      maintainAspectRatio: false,

      
      plugins:{
       
        gradient,
        legend: {
         display: false
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        },
  
        zoom: {
          pan: {
            enabled:true,
            mode: 'xy',
          },
          limits: {
            // axis limits
          },
          zoom: {
         
           wheel: {
            enabled: true,
          },
          }
        }
      },
      responsive:true,
      scales:{
        x: {
          
          stack:"10",
          reverse: true,

      
          ticks:{
            maxTicksLimit:10,
            color:"#FFB606",
           
      
         
            maxRotation: 0,
            minRotation: 0
          },
          scaleLabel: {
            display: true,
            labelString: 'Extra Distance Interval From Origin'
          },
          grid:{
            display:false,
          
          }
        },
        y: {
          stack:"5",
          // beginAtZero: true,
     
        
       
          ticks:{
            // beginAtZero: false,
           
            z:1000,
            callback: function (value:any,) {
              return `$ ${value.toString().padStart(4, '0')}`},
              precision:3,
            color:"#FFB606",
          
           
            
       
          },
          grid:{
           display:false
          }
        },

       

      },
      
    }

    const getGradient = (chart)=> {
  const {ctx,chartArea :{top,bottom,left,right}} = chart

  const gradientSegment = ctx.createLinearGradient(0,bottom,0,top)
  gradientSegment.addColorStop(0,"#00000000")
  // gradientSegment.addColorStop(0.5,"#00000000")
  gradientSegment.addColorStop(0.2,backgroundColor)

  gradientSegment.addColorStop(0.9,backgroundColorTwo)
  return gradientSegment
}

  return (
    <div className=" flex h-full w-full relative " >
       {/* <div className=' z-50 bg-white absolute background4-gradiant pointer-events-none '></div> */}
       <div className=' z-50 bg-white absolute background3-gradiant pointer-events-none '></div>
      <Line data={data} options={options}  className="hidden"/>
    </div>
  );
};

export default BigChart;
