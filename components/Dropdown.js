import Link from "next/link"
import styles from "@/styles/Home.module.css"


export default function Dropdown({ submenus }) {
    return (
        <ul className={`dropdown ${styles.dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} class Name={styles.menu_items}>
                    <Link href={submenu.url}>{submenu.title}</Link>

                </li>
            ))}

        </ul>
    )
}