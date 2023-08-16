import { Checkbox, Form } from "react-daisyui";

export const BasemapFeatureSelector = ({ showValues, onChangeHandler }) => {
	const { states, counties, cwas, pfzs } = showValues;

	return (
		<Form className='flex flex-col justify-center bg-blue-900 rounded-md p-4'>
			<Form.Label title='States' htmlFor='states'>
				<Checkbox
					className='ml-4'
					id='states'
					name='states'
					onChange={onChangeHandler}
					value={states}
					defaultChecked
				/>
			</Form.Label>
			<Form.Label title='Counties' htmlFor='counties'>
				<Checkbox
					className='ml-4'
					id='counties'
					name='counties'
					onChange={onChangeHandler}
					value={counties}
				/>
			</Form.Label>
			<Form.Label title='CWAs' htmlFor='cwas'>
				<Checkbox
					className='ml-4'
					id='cwas'
					name='cwas'
					onChange={onChangeHandler}
					value={cwas}
				/>
			</Form.Label>
			<Form.Label title='PFZs' htmlFor='pfzs'>
				<Checkbox
					className='ml-4'
					id='pfzs'
					name='pfzs'
					onChange={onChangeHandler}
					value={pfzs}
				/>
			</Form.Label>
		</Form>
	);
};
