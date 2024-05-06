import React, {useState, useEffect} from'react'
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'

const Header = () => {

    return(
        <header>
            <Link to="/" className="logo">Luna's Blog</Link>
            <NavLinks  />

        </header>
    )
}

export default Header