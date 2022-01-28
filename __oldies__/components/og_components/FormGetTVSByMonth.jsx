// #region -- IMPORTS
import { MonthSelectOptions } from './shared/MonthSelectOptions';
import { YearSelectOptions } from './shared/YearSelectOptions';
import { handleSelectOnChange } from '../utils/formHandleSelectOnChange';
// #endregion

export const FormGetTVSByMonth = ({ state, setState, handleBtnClick }) => {
	return (
		<form className='d-flex flex-wrap justify-content-center align-items-center bg-dark p-4'>
			<div className='mx-3'>
				<label htmlFor='month' className='me-2'>
					MONTH:
				</label>
				<select
					id='month'
					name='month'
					onChange={(e) => handleSelectOnChange(e, state, setState)}
				>
					<MonthSelectOptions />
				</select>
			</div>
			<div className='mx-3'>
				<label htmlFor='year' className='me-2'>
					YEAR:
				</label>
				<select
					id='year'
					name='year'
					onChange={(e) => handleSelectOnChange(e, state, setState)}
				>
					<YearSelectOptions />
				</select>
			</div>
			<button
				type='button'
				onClick={handleBtnClick}
				className='mx-3 bg-warning'
			>
				Get Tornadoes
			</button>
		</form>
	);
};
