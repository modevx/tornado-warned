import { useOutlookTextProductByDayQuery } from "services/outlook-text-products";

export const TextProduct = ({ day }) => {
	const { data } = useOutlookTextProductByDayQuery(day);

	return (
		<section
			id='convective-outlook-text-product'
			className='bg-neutral-200 text-black px-6 py-8 rounded-lg'
		>
			<pre className='whitespace-break-spaces sm:whitespace-pre text-sm max-w-prose mx-auto'>
				{data ? data : null}
			</pre>
		</section>
	);
};
