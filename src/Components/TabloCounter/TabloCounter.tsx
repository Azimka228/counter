import React from "react";
import Counter from "./Counter/Counter";
import ButtonKit from "../ButtonKit/ButtonKit";
import "./TabloCounter.css"
import {counterSettingValueType} from "../../App";

type TabloCounterProps = {
	changeCounterValue: () => void
	resetCounterValue: () => void
	counterSetting: counterSettingValueType
	counter: number
}

const TabloCounter: React.FC<TabloCounterProps> = ({
													   counter,
													   changeCounterValue,
													   resetCounterValue,
													   counterSetting
												   }) => {
	return (
		<div className="App">
			<Counter maxValue={counter === counterSetting.maxValue} counter={counter}/>
			<div className="Buttons-wrapper">
				<ButtonKit value={counter === counterSetting.maxValue || counterSetting.maxValue < counter}
						   callBack={changeCounterValue} title="increment"/>
				<ButtonKit value={counter === counterSetting.minValue} callBack={resetCounterValue} title="reset"/>
			</div>
		</div>
	);
};

export default TabloCounter;