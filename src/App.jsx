import "./App.css";
import { useState } from "react";

function App() {
  const [count,setCount] = useState(0)
  function decreaseHandler () {
    setCount(count-1)
  }
  function increaseHandler () {
    setCount(count+1)
  }
  function resetHandler () {
    setCount(0)
  }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-4xl">Increment & Decrement</div>
      <div className="bg-white flex flex-row justify-center py-3 gap-12 rounded-sm text-[25px] text-[#344151]">
        <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={decreaseHandler}>-</button>
        <div className="font-bold gap-12 text-5xl">
          {count}
        </div>
        <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl" onClick={increaseHandler}>+</button>
      </div>
      <div>
        <button className=" bg-[#0398d4] text-white rounded-sm text-lg px-5 py-2" onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
}

export default App;
