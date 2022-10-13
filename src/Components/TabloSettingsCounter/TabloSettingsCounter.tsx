import React, {useState} from "react";
import ButtonKit from "../ButtonKit/ButtonKit";
import "./TabloSettingsCounter.css"
import CounterSettings from "./CounterSettings/CounterSettings";
import {counterSettingValueType} from "../../App";

type TabloPropsType = {
	UpdateCounterValue: (e: counterSettingValueType) => void
}
export type tabloSettingsValueErrorType = {
	maxValue: boolean
	minValue: boolean
}
const TabloSettingsCounter: React.FC<TabloPropsType> = ({UpdateCounterValue}) => {
	const [tabloSettingsValue, setTabloCounterSettingsValue] = useState<counterSettingValueType>({
		maxValue: 5,
		minValue: 0
	})
	const [tabloSettingsValueError, setTabloSettingsValueError] = useState<tabloSettingsValueErrorType>({
		maxValue: false,
		minValue: false
	})
	const updateCounterSettingValue = (max: number, min: number) => {
		let NewObj = {
			maxValue: max,
			minValue: min
		}
		let NewErrorObj = {
			maxValue: max < 0 || max === min,
			minValue: min < 0 || max === min || min > max
		}
		setTabloCounterSettingsValue({...NewObj})
		setTabloSettingsValueError({...NewErrorObj})
	}
	const setCounterValue = () => {
		UpdateCounterValue(tabloSettingsValue)
	}

	return (
		<div className="App">
			<CounterSettings counterSettingValue={tabloSettingsValue}
							 updateCounterSettingValue={updateCounterSettingValue}
							 tabloSettingsValueError={tabloSettingsValueError}/>
			<div className="Buttons-wrapper">
				<ButtonKit value={tabloSettingsValueError.maxValue || tabloSettingsValueError.minValue}
						   callBack={setCounterValue} title="set"/>
			</div>
		</div>
	);
};

export default TabloSettingsCounter;