import React from "react";
import { Dialog } from "@headlessui/react";

export const AlertDetailModal = ({
	instruction,
	description,
	headline,
	color,
}) => {
	console.log(instruction);
	let [isOpen, setIsOpen] = React.useState(false);

	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	return (
		<>
			<div className='inset-0 flex items-center justify-center'>
				<button
					type='button'
					onClick={openModal}
					className={`px-4 py-2 text-sm font-medium text-white ${color} rounded-md shadow-md shadow-black w-full mt-3 hover:bg-neutral-600`}
				>
					Click For Alert Details
				</button>
			</div>

			<Dialog
				as='div'
				className='fixed inset-0 z-10 overflow-y-auto text-white bg-neutral-900/70'
				onClose={closeModal}
				open={isOpen}
			>
				<div className='min-h-screen px-4 text-center'>
					<Dialog.Overlay className='fixed inset-0' />

					{/* This element is to trick the browser into centering the modal contents. */}
					<span
						className='inline-block h-screen align-middle'
						aria-hidden='true'
					>
						&#8203;
					</span>

					<div
						className={`inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle ${color} shadow-xl shadow-black rounded-2xl`}
					>
						<div>
							<Dialog.Title as='h3' className='text-lg font-medium leading-6 '>
								INSTRUCTION
							</Dialog.Title>

							<div className='mt-2 bg-neutral-600 rounded p-4'>
								<p className='text-sm  italic'>{instruction}</p>
							</div>

							<Dialog.Title
								as='h3'
								className='text-lg font-medium leading-6 mt-2'
							>
								DESCRIPTION
							</Dialog.Title>

							<div className='mt-2 bg-neutral-600 rounded p-4'>
								<p className='text-sm '>{description}</p>
							</div>

							<Dialog.Title
								as='h3'
								className='text-lg font-medium leading-6 mt-2'
							>
								HEADLINE
							</Dialog.Title>

							<div className='mt-2 bg-neutral-600 rounded p-4'>
								<p className='text-sm '>{headline}</p>
							</div>
						</div>

						<div className='mt-4'>
							<button
								type='button'
								className='inline-flex justify-center px-4 py-2 text-sm font-medium border-none w-full border rounded bg-white text-black hover:bg-neutral-600'
								onClick={closeModal}
							>
								CLOSE
							</button>
						</div>
					</div>
				</div>
			</Dialog>
		</>
	);
};
