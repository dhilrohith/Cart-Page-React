import React from 'react';

const NavBar = ({ count, openCart }) => {
    return (
        <div className=" bg-gray-800 text-white">

            <div className="flex w-[90%] m-[auto] justify-between pt-[1rem] pb-[1rem] 
            items-center">
                <h1 className="font-medium text-[30px]">Shopping Cart</h1>

                <button className="flex justify-between items-center bg-red-600 rounded-md flex-shrink-0
                outline-none active:bg-red-600 hover:bg-red-500 pt-2 pb-2 pl-3 gap-2 font-medium"
                onClick={openCart}>
                    View Cart
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-shopping-cart relative">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2 13h13l3-9H6"></path>
                    </svg>
                    <div className="w-[15px] h-[15px] rounded-full bg-white 
                    flex-shrink-0 text-center text-black text-[10px] font-extrabold relative right-4 bottom-2">{count}</div>
                </button>
            </div>
        </div>
    );
};

export default NavBar;