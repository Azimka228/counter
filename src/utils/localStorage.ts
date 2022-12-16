export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("counter");
		if (serializedState === null) {
			return undefined;
		}
		return {
			counter: {
				currentValue: JSON.parse(serializedState),
				settings: {
					maxValue: 5,
					minValue: 0,
				}
			}
		}
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state: any) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem("counter", serializedState);
	} catch {
		// ignore write errors
	}
};