import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";
import Meta from "./Meta";

const PageWrapper = ({ children }) => {
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

export default PageWrapper;
