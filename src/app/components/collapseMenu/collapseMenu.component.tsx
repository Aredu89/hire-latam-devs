import { menuItem } from "../menuItem/menu-item.types";
import { v4 as uuidv4 } from 'uuid';
import styles from './collapseMenu.module.css';
import { useCollapsedMenu } from "@/app/context/collapsedMenu.context";
import { useContactForm } from "@/app/context/contactForm.context";

const CollapseMenu = ({ items, open }: { items: menuItem[], open: boolean }) => {
    const { toggleOpen } = useCollapsedMenu();
    const { toggleFormContactOpen } = useContactForm();

    return (
        <nav className={`${styles.container} ${open ? styles.open : ''}`}>
            {items.map(item => (
                <div key={uuidv4()}>
                    <a className={styles.menuItem} href={item.slug} onClick={toggleOpen}>{item.title}</a>
                </div>
            ))}
            <div
                className={`${styles.menuItem} ${styles.contact}`}
                onClick={(e) => {
                    e.preventDefault();
                    toggleOpen();
                    toggleFormContactOpen();
                }}
            >
                Contact Us!
            </div>
        </nav>
    );
};

export default CollapseMenu;