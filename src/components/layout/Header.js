import React from 'react';
//import { Link } from 'react-router-dom';

//<Link style={linkStyle} to="/">Home</Link> | <Link 
//style={linkStyle} to="/about">About</Link>

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;