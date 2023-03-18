import React from 'react'
import { NavLink } from 'react-router-dom'
import globalConstants from '../../../constants'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="flex flex-inline flex-wrap g-row-4 mq-767-flex-jc-c">
                {globalConstants.menu.subMenu.map((item, key) => {
                    return (<li key={key}><NavLink to={item.url}>{item.text}</NavLink></li>)
                })}
            </ul>
        </nav>
    )
}

export default Navbar