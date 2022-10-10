import React from "react";
import './Counter.css'

type counterProps = {
	value: number
}

const Counter: React.FC<counterProps> = ({value}) => {
	return (
		<div className="Counter-Wrapper">
			<div className={value === 5 ? "MaxCount": ""}>{value}</div>
		</div>
	);
};

export default Counter;