import React, {useEffect, useState} from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import ButtonKit from "./Components/ButtonKit/ButtonKit"
import CounterSettings from "./Components/CounterSettings/CounterSettings";

export type counterSettingValueType = {
	maxValue:number
	minValue:number
}

function App() {
	const ValueAsString = localStorage.getItem("CounterValue")
	const [counter, setCounter] = useState(ValueAsString ? +ValueAsString : 0)
	const [counterSettingValue, setCounterSettingValue] = useState<counterSettingValueType>({
		maxValue: 5,
		minValue: 0
	})
	const [counterMinValue,setCounterMinValue] = useState<number>(0)
	const [counterMaxValue,setCounterMaxValue] = useState<number>(5)
	useEffect(() => {
		localStorage.setItem("CounterValue", JSON.stringify(counter))
	}, [counter])

	const changeCounterValue = () => {
		setCounter(counter + 1)
	}
	const resetCounterValue = () => {
		setCounter(counterMinValue)
	}
	const updateCounterSettingValue = (max:number,min:number) => {
		let NewObj = {
			maxValue: max,
			minValue: min
		}
		setCounterSettingValue({...NewObj})
	}
	const updateCounterMaxMin = () => {
		setCounterMinValue(counterSettingValue.minValue)
		setCounterMaxValue(counterSettingValue.maxValue)
	}
	console.log(counterSettingValue)
	return (
		<>
			<div className="App">
				<CounterSettings counterSettingValue={counterSettingValue} updateCounterSettingValue={updateCounterSettingValue}/>
				<div className="Buttons-wrapper">
					<ButtonKit value={counter === 5} callBack={updateCounterMaxMin} title="set"/>
				</div>
			</div>
			<div className="App">
				<Counter maxValue={counter === counterMaxValue} counter={counter}/>
				<div className="Buttons-wrapper">
					<ButtonKit value={counter === counterMaxValue} callBack={changeCounterValue} title="increment"/>
					<ButtonKit value={counter === counterMinValue} callBack={resetCounterValue} title="reset"/>
				</div>
			</div>
		</>

	);
}

export default App;
