import React from 'react';

const Header = () => {
    return (
        <header className="px-32 flex justify-between items-center w-full pt-4 capitalize">
            <div className="flex items-center w-80">
                <img src="../../public/logo.png" alt="Pizzaria logo" className="mr-4"/>
                <h1 className="text-2xl font-bold">Resto app</h1>
            </div>
            <div className="w-full flex justify-center">
                <ul className="flex justify-between w-64 text-lg font-semibold">
                    <li><a href="/menu">menu</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </div>
            <a href="/login" className="mx-12 bg-[#F54748] text-white flex justify-center gap-2 items-center py-2 px-4 rounded-full text-lg font-normal"><i className="fa-solid fa-right-from-bracket"></i><span>login</span></a>
        </header>
    );
};

export default Header;
