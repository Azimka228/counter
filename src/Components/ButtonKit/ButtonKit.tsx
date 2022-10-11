import React, {memo} from "react";
import "./ButtonKit.css"

type ButtonKitProps = {
	value: boolean
	callBack: () => void
	title: string
}

const ButtonKit: React.FC<ButtonKitProps> = ({value, callBack, title}) => {
	return (
		<button disabled={value} onClick={callBack}>{title}</button>
	);
};

export default memo(ButtonKit);