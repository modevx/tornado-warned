export const handleSelectOnChange = (
	selectOnChangeEvent,
	currentState,
	setState
) => {
	const property = selectOnChangeEvent.target.name;
	const value = selectOnChangeEvent.target.value;

	setState({
		...currentState,
		[property]: value,
	});
};

// SHARE: add to react sbx & create example
