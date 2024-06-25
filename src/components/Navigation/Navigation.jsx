import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return (
        <nav>
            <NavLink to="/" className={css.link}>Home</NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" className={css.link}>Contacts</NavLink>
            )}
        </nav>
        
    )
}