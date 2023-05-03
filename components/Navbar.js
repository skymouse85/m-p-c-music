import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react";
import NavItem from "./NavItem";
import blackVibes from "../public/blackVibes.svg"

const DIRECTORY = [
    { text: "Home", href: "/"},
    { text: "Biography", href: "/pages/bio.js"},
    { text: "Music", href: "/pages/music.js"},
    { text: "Shows", href: "/pages/performances.js"},
];

export default function Navbar() {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>
                <Link href={"/"}>
                    <a>
                        <h1 className="logo">M-P-C music</h1>
                    </a>
                </Link>
                <div 
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {DIRECTORY.map((menu, idx) => {
                        <div 
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                           <NavItem active={activeIdx === idx} {...menu} />
                           </div>
                    })}
                </div>
            </nav>
        </header>
    );
};