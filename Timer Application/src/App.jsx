import { useEffect, useState } from 'react'

const TimerApplication = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    //Cleanup Function
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handle_Start_Pause = () => {
    setIsRunning(prev => !prev);
  };

  const handle_Reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <>
      <h1>Timer Application</h1>
      <h2>{seconds}</h2>

      <button onClick={handle_Start_Pause}>{isRunning ? 'Pause' : 'Start'}</button>
      <button onClick={handle_Reset}>Reset</button>
    </>
  )
};

export default TimerApplication;
