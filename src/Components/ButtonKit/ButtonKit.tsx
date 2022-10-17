import React, {MouseEventHandler, PropsWithChildren} from "react";
import "./ButtonKit.css"

type ButtonKitProps = {
	value?: boolean
	callBack: MouseEventHandler<HTMLButtonElement>
}

const ButtonKit: React.FC<PropsWithChildren<ButtonKitProps>> = ({value, callBack, children}) => {
	return (
		<button disabled={value} onClick={callBack}>{children}</button>
	);
};

export default ButtonKit;