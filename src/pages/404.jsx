import { PageLayout } from "components/_shared";

export default function Custom404() {
	return (
		<PageLayout>
			<h1 className='sr-only'>404 - Page Not Found</h1>
			<p className='font-bold text-3xl'>
				sorry. couldn&apos;t find THAT page. smash the BACK button to get back
				on track.
			</p>
		</PageLayout>
	);
}
