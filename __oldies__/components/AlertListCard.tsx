import styles from "../styles/Home.module.css";
import AlertList from "./AlertList";

const AlertListCard = ({ alertType, alertList }) => {
	return (
		<a href='https://nextjs.org/docs' className={styles.card}>
			<h2>{alertType} &rarr;</h2>
			<AlertList alertList={alertList} />
		</a>
	);
};

export default AlertListCard;
