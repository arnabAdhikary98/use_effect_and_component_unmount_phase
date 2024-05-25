// src/components/Stopwatch.jsx

import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stopWatchCOunt = setInterval(() => {
      setCount((e)=>{
        if(e >= 9){
          clearInterval(stopWatchCOunt)
        }
        return  e + 1;
      })
    }, 1000);

    let cleanupFunction = () => (clearInterval(stopWatchCOunt))
  }, []);
  

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
