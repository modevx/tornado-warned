import { Footer, Layout, Meta } from ".";
import { Header } from "../Header/Header";

export const PageWrapper = ({ children }) => {
	return (
		<div className='bg-stone-700 text-white'>
			<Meta />
			<Layout>
				{/* <Header /> */}
				<main className='grow flex flex-col h-full'>{children}</main>
				<Footer />
			</Layout>
		</div>
	);
};
