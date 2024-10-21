import React from 'react';

const DisplayCart = ({ product, addItem }) => {
    const handleOnClick = () => {
        addItem(product)
    }
    return (
  
            <div className="md:basis-1/4 shadow-md w-[70%] m-[auto] md:w-[100%] p-3
           bg-white flex flex-col justify-between md:h-[370px] rounded-lg md:flex-row flex-grow
           hover:scale-105 transition-transform duration-500  ease-in-out hover:cursor-pointer">
            <div className="container flex flex-col gap-3 md:gap-0 md:h-[350px] md:justify-between ">
                <div className="image flex justify-center">
                    <img src={product.image} alt="image"
                        className="w-[200px] h-[250px] md:w-[150px] md:h-[200px]" />
                </div>

                <div className="productDetails flex flex-col gap-2 md:gap-2 md:justify-between md:h-[100%] md:pt-3">
                    <h2 className="text-[16px] md:text-[13px] font-bold ">{product.title}</h2>
                    <div className="priceRating flex justify-between text-[14px] 
                        font-medium text-gray-400 md:text-[12px] ">
                        <p>$ {product.price}</p>
                        <p className="bg-yellow-600 text-white rounded-full 
                            w-[25px] h-[25px]  flex items-center justify-center
                            text-[12px]  flex-shrink-0">{product.rating.rate
                            }</p>
                    </div>

                    <div className='flex'>
                        <button className="bg-blue-500 rounded-md p-2 w-[250px] m-[auto]
                        text-white font-medium mt-2 md:p-2 hover:bg-blue-600 active:bg-blue-500 outline-none" onClick={handleOnClick}>Add To Cart</button>
                    </div>

                </div>
            </div>

        </div>
        

    );
};

export default DisplayCart;