import { useCollapsedMenu } from "@/app/context/collapsedMenu.context";
import styles from './collapseButton.module.css';

const CollapseButton = () => {
  const { open, toggleOpen } = useCollapsedMenu();
  return(
    <div className={styles.buttonContainer} onClick={() => toggleOpen()}>
      <span className={`${styles.icon} ${open ? styles.open : ''}`}>&nbsp;</span>
    </div>
  )
};

export default CollapseButton;