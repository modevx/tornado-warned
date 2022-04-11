import Link from "next/link";

export const NavBar = () => {
	return (
		<nav data-testid='navbar' className='p-4 flex justify-between'>
			<ul>
				<Link href='/alerts'>
					<a>alerts</a>
				</Link>
			</ul>
		</nav>
	);
};
