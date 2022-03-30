import Link from "next/link";

export const NavBar = () => {
	return (
		<nav className='flex justify-between'>
			<span className='text-lg font-bold'>
				T<span className='text-yellow-400'>A</span>
			</span>
			{/* <ul className='flex gap-x-4'>
				<li>
					<Link href='/'>
						<a>home</a>
					</Link>
				</li>
				<li>
					<Link href='/stats'>
						<a>stats</a>
					</Link>
				</li>
			</ul> */}
		</nav>
		// <Navbar expand='lg'>
		// 	<Container>
		// 		<Link href='/' passHref>
		// 			<Navbar.Brand>TORNADO ACTION</Navbar.Brand>
		// 		</Link>
		// 		<Navbar.Toggle
		// 			aria-controls='basic-navbar-nav'
		// 			className='bg-warning'
		// 		/>
		// 		<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
		// 			<Nav>
		// 				<Link href='#alerts' passHref>
		// 					<Nav.Link>alerts</Nav.Link>
		// 				</Link>
		// 				<Link href='#radar' passHref>
		// 					<Nav.Link disabled>radar</Nav.Link>
		// 				</Link>
		// 				<Link href='#stats' passHref>
		// 					<Nav.Link disabled>stats</Nav.Link>
		// 				</Link>
		// 			</Nav>
		// 		</Navbar.Collapse>
		// 	</Container>
		// </Navbar>
	);
};
