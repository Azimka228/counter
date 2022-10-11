import React, {useCallback, useEffect, useState} from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import ButtonKit from "./Components/ButtonKit/ButtonKit"


function App() {
	const ValueAsString = localStorage.getItem("CounterValue")
	const [counter, setCounter] = useState(ValueAsString ? +ValueAsString : 0)

	useEffect(() => {
		localStorage.setItem("CounterValue", JSON.stringify(counter))
	}, [counter])

	const changeCounterValue = useCallback(() => {
		setCounter(counter + 1)
	}, [setCounter, counter])
	const resetCounterValue = useCallback(() => {
		setCounter(0)
	},[setCounter])

	/*const changeCounterValue = () => {
		setCounter(counter + 1)
	}
	const resetCounterValue = () => {
		setCounter(0)
	}*/
	
	return (
		<div className="App">
			<Counter value={counter}/>
			<div className="Buttons-wrapper">
				<ButtonKit value={counter === 50} callBack={changeCounterValue} title="increment"/>
				<ButtonKit value={counter === 0} callBack={resetCounterValue} title="reset"/>
			</div>
		</div>
	);
}

export default App;
