import React, {ChangeEvent,} from "react";
import "./CounterSettings.css"
import {counterSettingValueType} from "../../../App";
import {tableSettingsValueErrorType} from "../TableSettingsCounter";

type CounterSettingsProps = {
	counterSettingValue: counterSettingValueType
	updateCounterSettingValue: (max: number, min: number) => void
	tableSettingsValueError: tableSettingsValueErrorType
}

const CounterSettings: React.FC<CounterSettingsProps> = ({
																																																										tableSettingsValueError,
																																																										counterSettingValue,
																																																										updateCounterSettingValue
																																																									}) => {
	const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		updateCounterSettingValue(+e.currentTarget?.value, counterSettingValue.minValue)
	}
	const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		updateCounterSettingValue(counterSettingValue.maxValue, +e.currentTarget?.value)
	}
	const MaxNumber = tableSettingsValueError.maxValue ? "error" : ""
	const MinNumber = tableSettingsValueError.minValue ? "error" : ""

	return (
		<div className="CounterSettings-Wrapper">
			<div className={["maxNumber", MaxNumber].join(" ")}>
				Max value: <input type="number"
																						value={counterSettingValue.maxValue}
																						onChange={onChangeMaxInputHandler}/>
			</div>
			<div className={["minNumber", MinNumber].join(" ")}>
				Min value: <input type="number"
																						value={counterSettingValue.minValue}
																						onChange={onChangeMinInputHandler}/>
			</div>

		</div>
	);
};

export default CounterSettings;