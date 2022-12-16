import React from "react";
import "./App.css";
import TableCounter from "./Components/TableCounter/TableCounter";
import {Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {increaseCountAC, resetCountAC, updateCountAC} from "./bll/counter-reducer";
import TableSettingsCounter from "./Components/TableSettingsCounter/TableSettingsCounter";

export type counterSettingValueType = {
	maxValue: number
	minValue: number
}

function App() {
	const dispatch = useDispatch()
	const counter = useSelector<AppStateType, number>(state => state.counter.currentValue)
	const counterSetting = useSelector<AppStateType, counterSettingValueType>(state => state.counter.settings)

	const increaseCounterValue = () => {
		const action = increaseCountAC()
		dispatch(action)
	}
	const resetCounterValue = () => {
		const action = resetCountAC()
		dispatch(action)
	}
	const UpdateCounterValue = (e: counterSettingValueType) => {
		const action = updateCountAC(e)
		dispatch(action)
	}
	return (
		<>
			<Routes>
				<Route path="/settings" element={<TableSettingsCounter
					UpdateCounterValue={UpdateCounterValue}
					counterSetting={counterSetting}
				/>}>
				</Route>
				<Route path="/" element={<TableCounter
					increaseCounterValue={increaseCounterValue}
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
