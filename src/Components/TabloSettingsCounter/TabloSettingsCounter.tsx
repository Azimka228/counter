import React, {MouseEventHandler, useState} from "react";
import ButtonKit from "../ButtonKit/ButtonKit";
import "./TabloSettingsCounter.css"
import CounterSettings from "./CounterSettings/CounterSettings";
import {counterSettingValueType} from "../../App";
import {useNavigate} from "react-router";

type TabloPropsType = {
	UpdateCounterValue: (e: counterSettingValueType) => void
	counterSetting: counterSettingValueType
}
export type tabloSettingsValueErrorType = {
	maxValue: boolean
	minValue: boolean
}
const TabloSettingsCounter: React.FC<TabloPropsType> = ({UpdateCounterValue, counterSetting}) => {
	const navigate = useNavigate();
	const [tabloSettingsValue, setTabloCounterSettingsValue] = useState<counterSettingValueType>({
		maxValue: counterSetting.maxValue,
		minValue: counterSetting.minValue
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

	const btnSetClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
		if (tabloSettingsValueError.maxValue || tabloSettingsValueError.minValue) {
			event.preventDefault()
		} else {
			UpdateCounterValue(tabloSettingsValue)
			navigate("/")
		}
	}

	return (
		<div className="App">
			<CounterSettings counterSettingValue={tabloSettingsValue}
																				updateCounterSettingValue={updateCounterSettingValue}
																				tabloSettingsValueError={tabloSettingsValueError}/>
			<div className="Buttons-wrapper">
				<ButtonKit btnDisabling={tabloSettingsValueError.maxValue || tabloSettingsValueError.minValue}
															onClickCallBack={btnSetClickHandler}
															buttonStyles={{gridArea:"B"}}
				>set</ButtonKit>
			</div>
		</div>
	);
};

export default TabloSettingsCounter;