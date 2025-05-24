import React from 'react';

const Home = () => {

    return (
        <main className="flex flex-col">
            <div className="text-center bg-[url(banner.png)] bg-no-repeat bg-cover bg-center">
                <div className="flex flex-col items-center justify-center max-md:h-[60vh] md:h-[80vh] bg-[#00000066] text-white space-y-12">
                    <p className="bg-[#FDD6D6] text-[#F54748] flex py-3 px-5 rounded-full text-base font-semibold">Beyond Speedy <img src="../../public/icone/pizza.png" alt="icone pizza"/></p>
                    <h2 className="font-bold w-3/5 sm:text-4xl md:text-5xl xl:text-7xl ">Ensure Your <span className="text-[#F54748]">Food</span> is Delivered with Speed</h2>
                    <p className="text-xs sm:text-xl md:text-2xl font-semibold">Our mission is to satisfy your appetite with delectable<br/> dishes, delivered swiftly and at no extra cost</p>
                    <p className="bg-[#F54748] flex py-3 px-5 rounded-full text-base font-semibold">Get Started</p>
                </div>
            </div>
        </main>
    );
};

export default Home;
