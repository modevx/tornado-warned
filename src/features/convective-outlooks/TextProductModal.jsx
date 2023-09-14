import { Modal } from "react-daisyui";
import { AiOutlineCloseCircle as CloseIcon } from "react-icons/ai";
import { useOutlookTextProductByDayQuery } from "services/outlook-text-products";

export const TextProductModal = ({ isOpen, closeHandler, outlookDay }) => {
	const { data: outlookText } = useOutlookTextProductByDayQuery(outlookDay);

	return (
		<Modal open={isOpen} onClick={closeHandler}>
			<CloseIcon onClick={closeHandler} />
			{outlookText ? <pre>{outlookText}</pre> : null}
		</Modal>
	);
};
