import { USStateMap } from "./USStateMap";

export const USMapLoading = ({ loadingMessage }) => {
	return (
		<USStateMap>
			<text x={350} y={250} fill='red' className='text-3xl font-bold'>
				{loadingMessage}
			</text>
		</USStateMap>
	);
};
