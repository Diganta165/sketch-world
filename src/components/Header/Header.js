import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Images/logo.png'
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext);
    return (
        <nav className="nav">
            <ul>
                <li>
                    <img className="logo" src={logo} alt="" />
                </li>
                <li>
                    <Link to="/home">Home</Link>
                    
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/deals">Deals</Link>
                </li>
                <li>
                    {
                        loggedInUser ? loggedInUser.name || loggedInUser.email
                        : <li></li>
                    }
                    
                </li>
                <li>
                <Link className="btn btn-primary" to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;