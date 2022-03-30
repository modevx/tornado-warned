import { Button } from "primereact/button";

const Hero = () => {
	return (
		<div className='surface-section px-4 py-8 md:px-6 lg:px-8'>
			<div className='text-700 text-center'>
				<div className='text-900 font-bold text-5xl mb-3'>
					stay ahead of the storm.
				</div>
				<div className='text-700 text-2xl mb-5'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
					numquam eligendi quos.
				</div>
				<Button
					label='STAY INFORMED'
					icon='pi pi-discord'
					className='font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap'
				/>
			</div>
		</div>
	);
};

export default Hero;
