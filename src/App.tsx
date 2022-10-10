import React, {useState} from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import ButtonKit from "./Components/ButtonKit/ButtonKit"

function App() {
  const [counter,setCounter] = useState<number>(0)
  const changeCounterValue = () => {
    setCounter(counter + 1)
  }
  const resetCounterValue = () => {
      setCounter(0)
  }
  return (
    <div className="App">
      <Counter value={counter} />
        <div className="Buttons-wrapper">
            <ButtonKit value={counter === 5} callBack={changeCounterValue} title={"increment"}/>
            <ButtonKit value={counter === 0} callBack={resetCounterValue} title={"reset"}/>
        </div>

    </div>
  );
}

export default App;
