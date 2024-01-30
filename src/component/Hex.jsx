import React, { useEffect, useState } from 'react'


const Hex = () => {
    const [typeofcolor,settypeofcolor] =useState("hex");
    const [color,setcolor] =useState("#000000");

    function random(length) {
      return Math.floor(Math.random()*length)
    }

    function randomhex(){
      const hex= [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
      let hexcolor="#";

      for (let i = 0; i < 6; i++) {
        hexcolor+=hex[random(hex.length)];
      }
      setcolor(hexcolor);
    }

    function randomrgb() {

      let r=random(256);
      let g=random(256);
      let b=random(256);

      setcolor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
      if(typeofcolor === "rgb"){
        randomrgb();
      }
      else{
        randomhex();
      }
    
    }, [typeofcolor])
    
 
  return (
    <div style={{
        width : '100vw',
        height: '100vh',
        background: color,
    }}>
        <button onClick={()=>settypeofcolor("hex")}>create HEX color</button>
        <button onClick={()=>settypeofcolor("rgb")}>create RGB color</button>
        <button onClick={ typeofcolor==="hex"? ()=>randomhex():()=>randomrgb()}>genrate random color</button>
        <div style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexDirection:'column',
          color:'white',
          fontSize:'60px'
        }}>
          <p>{typeofcolor === "rgb"? "RGB color":"hex color"}</p><br />
          <h1>{color}</h1>
        </div>
    </div>
  )
}

export default Hex