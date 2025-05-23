import React from 'react';

const Header = () => {
    return (
        <header>
            <div><img src="../../public/logo.png" alt="Pizzaria logo"/><h1>Resto app</h1></div>
            <div>
                <ul>
                    <li><a href="/menu">menu</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </div>
            <a href="/login"><i className="fa-solid fa-right-from-bracket"></i><span>login</span></a>
        </header>
    );
};

export default Header;
