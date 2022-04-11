import { Footer, Layout, Meta } from ".";
import { Header } from "../Header/Header";

export const PageWrapper = ({ children }) => {
	return (
		<div className='text-white'>
			<Meta />
			<Layout>
				<Header />
				<main className='grow'>{children}</main>
				<Footer />
			</Layout>
		</div>
	);
};
