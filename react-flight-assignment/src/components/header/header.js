import React from 'react';
import './header.css'

const Header = () => {

    return (
        <header className="App-header">
            <div className="App-logo">
                <img src="https://cdn.aertrip.com/resources/assets/scss/skin/img/common/aertip-vertical-logo-white.svg" alt="logo" className="Logo" />
                <img src="https://cdn.aertrip.com/resources/assets/scss/skin/img/common/aertrip-name-vertical-white.svg" alt="aertrip logo" />
            </div>
            <div className="App-nav">
                <nav>
                    <a href="/">Aerin</a>
                    <a href="/" className="active">Flight</a>
                    <a href="/">Hotel</a>
                </nav>
            </div>
            <div className="App-login">
                <a href="/">Login</a>
            </div>
        </header>
    )
}

export default Header;