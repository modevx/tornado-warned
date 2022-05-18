export const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className='text-center'>
			<p>&copy; {year} | tornadoaction.com | All Rights Reserved.</p>
		</footer>
	);
};
