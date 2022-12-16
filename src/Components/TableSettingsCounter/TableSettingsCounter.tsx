import React, {MouseEventHandler, useState} from "react";
import ButtonKit from "../ButtonKit/ButtonKit";
import "./TableSettingsCounter.css"
import CounterSettings from "./CounterSettings/CounterSettings";
import {counterSettingValueType} from "../../App";
import {useNavigate} from "react-router";

type TablePropsType = {
	UpdateCounterValue: (e: counterSettingValueType) => void
	counterSetting: counterSettingValueType
}
export type tableSettingsValueErrorType = {
	maxValue: boolean
	minValue: boolean
}
const TableSettingsCounter: React.FC<TablePropsType> = ({UpdateCounterValue, counterSetting}) => {
	const navigate = useNavigate();
	const [tableSettingsValue, setTableCounterSettingsValue] = useState<counterSettingValueType>({
		maxValue: counterSetting.maxValue,
		minValue: counterSetting.minValue
	})
	const [tableSettingsValueError, setTableSettingsValueError] = useState<tableSettingsValueErrorType>({
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
		setTableCounterSettingsValue({...NewObj})
		setTableSettingsValueError({...NewErrorObj})
	}

	const btnSetClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
		if (tableSettingsValueError.maxValue || tableSettingsValueError.minValue) {
			event.preventDefault()
		} else {
			UpdateCounterValue(tableSettingsValue)
			navigate("/")
		}
	}

	return (
		<div className="App">
			<CounterSettings counterSettingValue={tableSettingsValue}
																				updateCounterSettingValue={updateCounterSettingValue}
																				tableSettingsValueError={tableSettingsValueError}/>
			<div className="Buttons-wrapper">
				<ButtonKit btnDisabling={tableSettingsValueError.maxValue || tableSettingsValueError.minValue}
															onClickCallBack={btnSetClickHandler}
															buttonStyles={{gridArea: "B"}}
				>set</ButtonKit>
			</div>
		</div>
	);
};

export default TableSettingsCounter;