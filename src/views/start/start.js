import { Logo } from "../../components/Logo/Logo";
import styles from "./_start.module.css";

export function Start() {
	return (
		<div className={styles.start}>
			<div>
				<h1>Adding players</h1>
			</div>
			<Logo />
		</div>
	);
}
