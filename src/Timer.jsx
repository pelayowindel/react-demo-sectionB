import { useState, useEffect } from "react"

export const Timer = ({initTime, isPlay = false}) => {

  const [time, setTime] = useState(initTime)
  const [isRunning, setIsRunning] = useState(isPlay)

  const handleStop = () => {
    setTime((prev) => prev - 1)
  }

  const handleStartPause = () => {
    setIsRunning(!isRunning)
  }

  // //        side-effect
  // //           |
  // //useEffect(()=>{}, [])
  // //                   |
  // //            dependecy/ies

  // useEffect(() => {
  //   console.log("No depsss") //run side-effect when 1 or state changes
  // })

  // useEffect(() => {
  //   console.log("Empty depsss") //run side-effect when first mount
  // }, [])

  // useEffect(() => {
  //   console.log("isRunning as depsss") //run side side-effect when dependency changes
  // }, [isRunning])


  useEffect(()=>{
    if(time === 0 || !isRunning ) return;

    const interval = setInterval(() => {
      //setTime((prevValue) => {return prevValue - 1})
      setTime((prevValue) => prevValue -1 )
      console.log(`tick... ${time}`)
    }, 1000);

    return () => {
      console.log(`clearing interval`)
       clearInterval(interval)
    }
  }, [time, isRunning])

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "1rem",
        textAlign: "center",
        width: "8rem"
      }}>
      <h3>{time}</h3>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleStartPause}>{isRunning ? "Pause" : "Start"}</button>
    </div>
  )
}