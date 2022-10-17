import React from "react";
import Counter from "./Counter/Counter";
import ButtonKit from "../ButtonKit/ButtonKit";
import "./TabloCounter.css"
import {counterSettingValueType} from "../../App";
import {Link} from "react-router-dom";

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
						   callBack={changeCounterValue}>increment</ButtonKit>
				<ButtonKit value={counter === counterSetting.minValue} callBack={resetCounterValue}>reset</ButtonKit>
				<ButtonKit value={counter === counterSetting.minValue} callBack={resetCounterValue}>
					<Link to={"/settings"}>SETTINGS</Link>
				</ButtonKit>

			</div>
		</div>
	);
};

export default TabloCounter;