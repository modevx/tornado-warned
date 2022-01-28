const FetchButton = ({ label, funcRef }) => {
	return (
		<button type='button' className='FetchButton' onClick={funcRef}>
			{label}
		</button>
	);
};

export default FetchButton;
