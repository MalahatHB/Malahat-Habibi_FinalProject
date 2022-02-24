import classes from "./Header.module.css";
import { Link } from 'react-router-dom';
import path from "../router/paths";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <Link to={path.home}><p className="m-0">{props.title}</p></Link>
        </div>
    );
}
export default Header;