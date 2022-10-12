import React, {ChangeEvent} from "react";
import "./CounterSettings.css"
import {counterSettingValueType} from "../../App";

type CounterSettingsProps = {
	counterSettingValue: counterSettingValueType
	updateCounterSettingValue: (max: number, min: number) => void
}

const CounterSettings: React.FC<CounterSettingsProps> = ({counterSettingValue, updateCounterSettingValue}) => {
	const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		updateCounterSettingValue(+e.currentTarget?.value, counterSettingValue.minValue)
	}
	const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		updateCounterSettingValue(counterSettingValue.maxValue, +e.currentTarget?.value)
	}
	return (
		<div className="CounterSettings-Wrapper">
			<div className="maxNumber">
				Max value: <input type="number" value={counterSettingValue.maxValue}
								  onChange={onChangeMaxInputHandler}/>
			</div>
			<div className="minNumber">
				Min value: <input type="number" value={counterSettingValue.minValue}
								  onChange={onChangeMinInputHandler}/>
			</div>

		</div>
	);
};

export default CounterSettings;