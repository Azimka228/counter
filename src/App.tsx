import React, {useEffect, useState} from "react";
import "./App.css";
import TabloSettingsCounter from "./Components/TabloSettingsCounter/TabloSettingsCounter";
import TabloCounter from "./Components/TabloCounter/TabloCounter";
import {Route, Routes} from "react-router-dom";

export type counterSettingValueType = {
	maxValue: number
	minValue: number
}

function App() {
	const ValueAsString = localStorage.getItem("CounterValue")
	const [counter, setCounter] = useState(ValueAsString ? +ValueAsString : 0)
	const [counterSetting, setCounterSetting] = useState<counterSettingValueType>({
		maxValue: 5,
		minValue: 0,
	})
	useEffect(() => {
		localStorage.setItem("CounterValue", JSON.stringify(counter))
	}, [counter])

	const changeCounterValue = () => {
		setCounter(counter + 1)
	}
	const resetCounterValue = () => {
		setCounter(counterSetting.minValue)
	}
	const UpdateCounterValue = (e: counterSettingValueType) => {
		setCounterSetting(e)
		setCounter(e.minValue)
	}
	return (
		<>
			<Routes>
				<Route path="/settings" element={<TabloSettingsCounter
					UpdateCounterValue={UpdateCounterValue}
					counterSetting={counterSetting}
				/>}>
				</Route>
				<Route path="/" element={<TabloCounter
					changeCounterValue={changeCounterValue}
					resetCounterValue={resetCounterValue}
					counterSetting={counterSetting}
					counter={counter}
				/>}>

				</Route>
			</Routes>
		</>

	);
}

export default App;
