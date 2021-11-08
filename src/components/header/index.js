import React from 'react';
import { NavLink } from 'react-router-dom';
// import Search from './search';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <ul className='d-flex w-100 align-items-center'>
                    <li>
                        <NavLink className="text-white fs-3 me-5" exact to="/">Home</NavLink>
                    </li>
                    {/* <Search/> */}
                    <li>
                        <NavLink className="text-white fs-3" exact to="/loginPage">Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
