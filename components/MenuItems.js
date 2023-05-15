import Dropdown from "./Dropdown";
import styles from "@/styles/Home.module.css"
import { useState } from "react";

export default function MenuItems({items}) {
    const [dropdown, setDropdown] = useState(false);
    return (
        <li className={styles.menu_items}>
             {items.submenu ? (
            <>
             <button 
                type="button" 
                aria-haspopup="menu"
                aria-expanded={dropdown ? "true" : "false"}
                onClick={() => setDropdown((prev) => !prev)}
                >

             {items.title}{' '}
            </button>
            <Dropdown
              submenus={items.submenu}
              dropdown={dropdown}
            
            />
          </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
        </li>
    )
}

