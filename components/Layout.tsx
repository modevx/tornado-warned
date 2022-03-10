const Layout = ({ children }) => {
	return (
		<div className='bg-zinc-800 flex flex-col min-h-screen p-4 '>
			{children}
		</div>
	);
};

export default Layout;
