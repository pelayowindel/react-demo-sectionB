import { useState } from 'react';
import {Timer} from './Timer'

export const Timers = () => {
  const [timers,setTimers] = useState([100,50,25,5])
  
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap : "1rem",
        padding : "1rem"
      }}>
      <Timer initTime={100} isPlay={true}/>
      <Timer initTime={50}/>
      <Timer initTime={25}  isPlay={true}/>
      <Timer initTime={5}/>

    </div>
    );
}