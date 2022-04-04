import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import localized from "dayjs/plugin/localizedFormat";
dayjs.extend(localized);

const NavBar = () => {
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

const Clock = () => {
	const [time, setTime] = React.useState(new Date());

	const clockTick = () => {
		setTime(new Date());
	};

	React.useEffect(() => {
		let id = setInterval(() => {
			clockTick();
		}, 1000);

		return () => clearInterval(id);
	}, [time]);

	return (
		<div className='flex flex-col'>
			<span className='clock-date'>{dayjs(time).format("ll | LT")}</span>
		</div>
	);
};

export const Header = () => {
	return (
		<header className='flex justify-between items-center text-xs'>
			<NavBar />
			<Clock />
		</header>
	);
};
