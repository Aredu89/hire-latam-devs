import { menuItem } from "../menuItem/menu-item.types";
import styles from './collapseMenu.module.css';

const CollapseMenu = ({ items, open }: { items: menuItem[], open: boolean }) => {
    return (
        <div className={`${styles.container} ${open ? styles.open : ''}`}>Collapse Menu</div>
    );
};

export default CollapseMenu;