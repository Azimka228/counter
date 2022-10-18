import React, {MouseEventHandler, PropsWithChildren} from "react";
import "./ButtonKit.css"

type ButtonKitProps = {
	btnDisabling?: boolean
	onClickCallBack: MouseEventHandler<HTMLButtonElement>
	buttonStyles?: object
}

const ButtonKit: React.FC<PropsWithChildren<ButtonKitProps>> = (
	{
		buttonStyles,
		btnDisabling,
		onClickCallBack,
		children
	}) => {
	return (
		<button disabled={btnDisabling} style={buttonStyles} onClick={onClickCallBack}>{children}</button>
	);
};

export default ButtonKit;