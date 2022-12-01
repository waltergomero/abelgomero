import React from "react";
//import { NavLink } from "react-router-dom";
import Link  from "next/link";
import { useRouter } from 'next/router'

const MainMenu = () => {
    const router = useRouter()
    return (
        <nav>
            <ul className="main-menu">
                <li className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>
                    <Link className="main-menu-link" exact href="/">
                        Home
                    </Link>
                </li>
                <li className={`nav-link ${router.pathname == "/contact" ? "active" : ""}`}>
                    <Link className="main-menu-link" href="/contact">
                        Contactar
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
