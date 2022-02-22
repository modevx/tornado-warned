import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Navigation = () => {
	return (
		<Navbar expand='lg'>
			<Container>
				<Link href='/' passHref>
					<Navbar.Brand>TORNADO ACTION</Navbar.Brand>
				</Link>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className='bg-warning'
				/>
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav>
						<Link href='#alerts' passHref>
							<Nav.Link>alerts</Nav.Link>
						</Link>
						<Link href='#radar' passHref>
							<Nav.Link disabled>radar</Nav.Link>
						</Link>
						<Link href='#stats' passHref>
							<Nav.Link disabled>stats</Nav.Link>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
