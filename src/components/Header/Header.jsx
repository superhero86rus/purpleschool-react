import styles from './Header.module.css';

function Header() {
	return (
		<img className={styles.logo} src="/logo.svg" alt="React Journal"></img>
	);
}

export default Header;