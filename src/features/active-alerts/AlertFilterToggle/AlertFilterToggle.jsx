import { Toggle } from "react-daisyui";

export const AlertFilterToggle = ({
	name,
	onChangeHandler,
	isToggled,
	label,
}) => {
	return (
		<div className='flex my-2 mx-4'>
			<Toggle
				color='success'
				name={name}
				onChange={onChangeHandler}
				checked={isToggled}
				size='sm'
			/>
			<span className='ml-2 text-sm'>{label}</span>
		</div>
	);
};
