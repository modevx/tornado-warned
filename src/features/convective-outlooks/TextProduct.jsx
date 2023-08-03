import { useOutlookTextProductByDayQuery } from "services/outlook-text-products";

export const TextProduct = ({ day }) => {
	const { data } = useOutlookTextProductByDayQuery(day);

	return <div>{data ? data : null}</div>;
};
