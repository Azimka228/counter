import React from "react";
import Counter from "./Counter/Counter";
import ButtonKit from "../ButtonKit/ButtonKit";
import "./TableCounter.css"
import {counterSettingValueType} from "../../App";
import {useNavigate} from "react-router";

type TableCounterProps = {
	increaseCounterValue: () => void
	resetCounterValue: () => void
	counterSetting: counterSettingValueType
	counter: number
}

const TableCounter: React.FC<TableCounterProps> = (
	{
		counter,
		increaseCounterValue,
		resetCounterValue,
		counterSetting
	}) => {

	const navigate = useNavigate();

	const btnSettingsClickHandler = () => {
		navigate("/settings");
	}

	return (
		<div className="App">
			<Counter maxValue={counter === counterSetting.maxValue} counter={counter}/>
			<div className="Buttons-wrapper">
				<ButtonKit btnDisabling={counter === counterSetting.maxValue || counterSetting.maxValue < counter}
															onClickCallBack={increaseCounterValue}>increment</ButtonKit>
				<ButtonKit btnDisabling={counter === counterSetting.minValue} onClickCallBack={resetCounterValue}>reset</ButtonKit>
				<ButtonKit onClickCallBack={btnSettingsClickHandler}>settings</ButtonKit>
			</div>
		</div>
	);
};

export default TableCounter;