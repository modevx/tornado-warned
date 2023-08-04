import { Form, Radio } from "react-daisyui";

export const DayPicker = ({ onChangeHandler }) => {
	return (
		<Form
			className='flex flex-row justify-center mb-8'
			onChange={onChangeHandler}
			name='outlook-day-picker'
		>
			<RadioAndLabel>
				<Form.Label htmlFor='day-1'>Day 1</Form.Label>
				<Radio
					id='day-1'
					name='outlook-day'
					value={1}
					className='ml-2'
					defaultChecked
				/>
			</RadioAndLabel>
			<RadioAndLabel>
				<Form.Label htmlFor='day-2'>Day 2</Form.Label>
				<Radio id='day-2' name='outlook-day' value={2} className='ml-2' />
			</RadioAndLabel>
			<RadioAndLabel>
				<Form.Label htmlFor='day-3'>Day 3</Form.Label>
				<Radio id='day-3' name='outlook-day' value={3} className='ml-2' />
			</RadioAndLabel>
		</Form>
	);
};

const RadioAndLabel = ({ children }) => (
	<div className='flex items-center mx-4'>{children}</div>
);
