import { Footer, Layout, Meta } from ".";

export const PageWrapper = ({ children }) => {
	return (
		<div className='bg-stone-700 text-white'>
			<Meta />
			<Layout>
				<main className='grow flex flex-col h-full'>{children}</main>
				<Footer />
			</Layout>
		</div>
	);
};
