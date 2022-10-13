import React, {ChangeEvent} from "react";
import "./CounterSettings.css"
import {counterSettingValueType} from "../../../App";
import {tabloSettingsValueErrorType} from "../TabloSettingsCounter";

type CounterSettingsProps = {
	counterSettingValue: counterSettingValueType
	updateCounterSettingValue: (max: number, min: number) => void
	tabloSettingsValueError: tabloSettingsValueErrorType
}

const CounterSettings: React.FC<CounterSettingsProps> = ({
															 tabloSettingsValueError,
															 counterSettingValue,
															 updateCounterSettingValue
														 }) => {
	const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		updateCounterSettingValue(+e.currentTarget?.value, counterSettingValue.minValue)
	}
	const onChangeMinInputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		updateCounterSettingValue(counterSettingValue.maxValue, +e.currentTarget?.value)
	}
	const MaxNumber = tabloSettingsValueError.maxValue? "maxNumber error": "maxNumber"
	const MinNumber = tabloSettingsValueError.minValue? "minNumber error": "minNumber"

	return (
		<div className="CounterSettings-Wrapper">
			<div className={MaxNumber}>
				Max value: <input type="number"
								  value={counterSettingValue.maxValue}
								  onChange={onChangeMaxInputHandler}/>
			</div>
			<div className={MinNumber}>
				Min value: <input type="number"
								  value={counterSettingValue.minValue}
								  onChange={onChangeMinInputHandler}/>
			</div>

		</div>
	);
};

export default CounterSettings;