import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav: React.FC = () => {
    
    return (
        <div className='nav-wrapper'>
            <NavLink className='nav-item' activeClassName='active' to='/contacts'> Contacts </NavLink>
        </div>
    )
}

export default Nav