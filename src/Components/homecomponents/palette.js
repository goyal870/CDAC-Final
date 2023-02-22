import React, { useState } from "react";
// import { useEffect ,useRef,useState} from "react";
import "./palette.css";
//import ReactCanvasPaint from 'react-canvas-paint';
// import 'react-canvas-paint/dist/index.css';
export default function Palette(){
const colors = [
  "#000000",
  "#464646",
  "#787878",
  "#980031",
  "#ed1d25",
  "#ff7d01",
  "#ffc30e",
  "#a7e71d",
  "#23b14c",
  "#03b8ef",
  "#4c6cf3",
  "#303699",
  "#6e3198",
  "#ffffff",
  "#dcdcdc",
  "#9c593c",
  "#ffa3b1",
  "#e5aa7a",
  "#f5e59c",
  "#fff9be",
  "#d3f9bc",
  "#9cbb60",
  "#99d9eb",
  "#6f99d2",
  "#536c8e"
];

const [background,setBackground] = useState("#0714115");
const [selected, setSelected] = useState("#000000");
// const canvasRef =useRef(null);
// const contextRef =useRef(null);

// const [isDrawing, setDrawing] = useState(false);
// useEffect(()=>{
//   const canvas =canvasRef.current;
//   canvas.width =500;
//   canvas.height =500;

//   const context =canvas.getContext("2d");
//   context.lineCap ="round";
//   context.strokeStyle = "black";
//   context.lineWidth = 5;
//   contextRef.current = context;
// },[]);
// const startDrawing = ({nativeEvent}) => {
//  const {offsetX, offsetY} = nativeEvent;
//  contextRef.current.beginPath();
//  contextRef.current.moveto();
//  contextRef.current.lineto();
//  contextRef.current.stroke();
//  setDrawing(true);
//  nativeEvent.preventDefault();

// };

// const draw = ({nativeEvent}) => {
//  if(!isDrawing) {
//     return;
//  }
//  const {offsetX,offsetY} = nativeEvent;
//  contextRef.current.lineto(offsetX,offsetY);
//  contextRef.current.stroke();
//  nativeEvent.preventDefault()
// };
// const stopDrawing = () =>{
//  contextRef.current.closePath();
//  setDrawing(false);
// }

return (
    
    <div className="Palette" style={{background:background, width: "70%" , position:"relative" , alignItems:"center"}}>
         <div className="canvas">
          {/* ref={canvasRef}
          onMouseDown ={startDrawing}
          onMouseMove ={draw}
          onMouseUp ={stopDrawing} */}
         </div>  
        <div className="contain">
        <div style={{width: "35px", height: "35px", backgroundColor: selected}}></div>
            {colors.map((color, index)=>(
                <div key={index} className="card">
                    <div style={{
                        background:color,
                        filter: "brightness(85%)"
                    }}
                    
                    className="box" onClick={()=>setSelected(color)}/>
                    
            </div>
            
            ))}   
           
            
    </div>

    </div>
    
);
}   

// for (var key in color){
//     console.log( color[key] + key);
//  }