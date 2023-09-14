import styles from '../Components/header.module.css';
import igniteLogo from '../Assets/igniteLogo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo do ignite"/>
        </header>
    )
}