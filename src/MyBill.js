import React, { useState } from 'react'
import './MyBill.css'



const MyBill = () => {
    const [firstReading, setfirstReading]=useState(0);
    const [secondReading, setsecondReading]=useState(0);
    const [pricePerHour, setpricePerHour]=useState(0);
    const [showDiv,setshowDiv]=useState(false);
    let totalTime;
    
function makeZero() { 
    setsecondReading(0);
    setfirstReading(0);
    setshowDiv(false)
      }
function TimeCal() {
  setshowDiv(true);
  console.log(totalTime);
  }
  function firstChange(e) {
    setfirstReading(e.target.value);
    setshowDiv(false);
  }
  return (
    <div className='body'>
        <h1 className='heading'>Time Converter</h1>
        <div className='rows'>First Reading</div>
        <input value={firstReading} onChange={firstChange} className='rows' className='firstNum' min={0} type="number"></input>
        <div className='rows'>Second Reading</div>
        <input  value={secondReading} onChange={e=>{setsecondReading(e.target.value);setshowDiv(false)}} name='second' className='rows' className='firstNum' min={0} type="number"></input>
        <div className='rows'>Price Per Hour</div>
        <input value={pricePerHour} onChange={e=>{setpricePerHour(e.target.value); setshowDiv(false)}} className='rows' className='firstNum' min={0} type="number"></input>
        <br/>
        <button onClick={TimeCal}>Submit</button>
        <br/>
        <button onClick={makeZero}>Reset</button>
        <div style={{display: showDiv ? 'block': 'none'}}>
          <div> Total Time is: </div>
          <div>  {Math.floor(((secondReading-firstReading)*0.6)/60)}:{Math.floor(((secondReading-firstReading)*0.6)%60)}</div>
          <div>Price is:</div>
          <div>{Math.floor(((secondReading-firstReading)*0.6)*pricePerHour/60)}</div>
        </div>
        
    </div>
    
  )
}

export default MyBill