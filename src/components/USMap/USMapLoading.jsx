import { USMap } from "./USMap";

export const USMapLoading = ({ loadingMessage }) => {
	return (
		<USMap>
			<text x={350} y={250} fill='red' className='text-3xl font-bold'>
				{loadingMessage}
			</text>
		</USMap>
	);
};
