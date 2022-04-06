import { Footer, Header, Layout, Meta } from "./";

export const PageWrapper = ({ children }) => {
	return (
		<div className='text-white'>
			<Meta />
			<Layout>
				{/* <Header /> */}
				<main className='grow'>{children}</main>
			</Layout>
		</div>
	);
};
