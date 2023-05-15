import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import NavItem from "./NavItem";
import blackVibes from "../public/blackVibes.svg"
import MenuItems from "./MenuItems";
import { menuItems } from "@/lib/menuItems";

export default function Navbar() {
    return (
        <nav>
            <ul className="menus">
            {menuItems.map((menu, index) => {
              return <MenuItems items={menu} key={index} />;
             })}
          </ul>

        </nav>
    )
}


