import { useOutlookTextProductByDayQuery } from "services/outlook-text-products";

export const TextProduct = ({ day }) => {
	const { data } = useOutlookTextProductByDayQuery(day);

	return <pre className='mx-auto'>{data ? data : null}</pre>;
};
