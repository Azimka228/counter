import React from "react";
import './Counter.css'

type counterProps = {
	maxValue: boolean
	counter: number
}

const Counter: React.FC<counterProps> = ({maxValue,counter}) => {
	return (
		<div className="Counter-Wrapper">
			<div className={maxValue ? "MaxCount": ""}>{counter}</div>
		</div>
	);
};

export default Counter;