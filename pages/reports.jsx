import { Navbar, PageWrapper } from "components";

const ReportsPage = () => {
	return (
		<PageWrapper>
			<Navbar />
			<div className='grow flex items-center justify-center'>
				<h1 className='text-center'>
					Local Storm Reports and Damage Assessments
				</h1>
			</div>
		</PageWrapper>
	);
};

export default ReportsPage;
