import React, {useState} from 'react';

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <header className="relative px-8 md:px-12 lg:px-32 flex justify-between items-center w-full pt-4 capitalize">
            <div className="flex items-center">
                <img src="/logo.png" alt="Pizzaria logo" className="size-10 md:mr-4"/>
                <h1 className="text-lg md:text-2xl font-bold">Resto app</h1>
            </div>
            <div className="max-sm:hidden sm:flex">
                <ul className="flex justify-between w-52 md:w-64 text-base md:text-lg font-semibold">
                    <li><a href="/menu">menu</a></li>
                    <li><a href="/about">about</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </div>
            <a href="/login" className="mx-8     bg-[#F54748] text-white max-sm:hidden sm:flex justify-center gap-2 items-center py-2 px-4 rounded-full text-lg font-normal"><i className="fa-solid fa-right-from-bracket"></i><span>login</span></a>
            <div className="sm:hidden" onClick={() => setMenuToggle(!menuToggle)}>
                <i className={`fa-solid ${menuToggle ? 'fa-xmark' : 'fa-bars'} text-3xl`}></i>
                <div className={`${menuToggle ? 'flex' : 'hidden'} absolute top-0 left-0 w-screen h-screen bg-[#00000099] flex items-center justify-center`}>
                    <nav className="bg-white w-1/2 h-1/2 rounded-2xl p-5 flex justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <ul className="flex flex-col items-center justify-center space-y-6 w-52 md:w-64 text-base md:text-lg font-semibold">
                            <li><a href="/menu">menu</a></li>
                            <li><a href="/about">about</a></li>
                            <li><a href="/contact">contact</a></li>
                            <li><a href="/login" className="mx-8 bg-[#F54748] text-white flex justify-center gap-2 items-center py-2 px-4 rounded-full text-lg font-normal"><i className="fa-solid fa-right-from-bracket"></i><span>login</span></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
