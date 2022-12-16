import {counterSettingValueType} from "../App";

const initialState = {
	currentValue: 0,
	settings: {
		maxValue: 5,
		minValue: 0,
	}

}

type initialStateType = typeof initialState

const INCREASE_COUNT = "INCREASE_COUNT"
const RESET_COUNT = "RESET_COUNT"
const UPDATE_COUNT = "UPDATE_COUNT"

type IncreaseCountType = {
	type: "INCREASE_COUNT"
}

type ResetCountType = {
	type: "RESET_COUNT"
}

type UpdateCountType = {
	type: "UPDATE_COUNT"
	settings: counterSettingValueType
}

type ActionsType = IncreaseCountType | ResetCountType | UpdateCountType

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
		case "INCREASE_COUNT": {
			const copyState = {...state}
			copyState.currentValue += 1
			return copyState
		}
		case "RESET_COUNT": {
			const copyState = {...state}
			copyState.currentValue = copyState.settings.minValue
			return copyState
		}
		case "UPDATE_COUNT": {
			const copyState = {
				...state,
				currentValue: action.settings.minValue,
				settings: {
					maxValue: action.settings.maxValue,
					minValue: action.settings.minValue,

				}
			}
			return copyState
		}
		default: {
			return state
		}
	}
}

export const updateCountAC = (settings: counterSettingValueType) => {
	return {type: UPDATE_COUNT, settings}
}

export const increaseCountAC = () => {
	return {type: INCREASE_COUNT}
}

export const resetCountAC = () => {
	return {type: RESET_COUNT}
}