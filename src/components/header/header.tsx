import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/books"}>Books</Link>
            </li>
            <li>
                <Link to={"/profile"}>Profile</Link>
            </li>
        </ul>
    </nav>
}

export default Header;