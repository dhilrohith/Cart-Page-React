import React, { useEffect, useState } from 'react';

const AddToCart = ({ items, setItems }) => {
    const [price, setPrice] = useState(0);

    // Calculate total price based on quantity and price of each item
    const handlePrice = () => {
        let total = 0;
        items.forEach((item) => {
            total += item.price * item.quantity; // price * quantity for each item
        });
        setPrice(total);
    };

    // Increase item quantity
    const handleIncrease = (id) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }; // Increase the quantity
            }
            return item;
        });
        setItems(updatedItems); // Update the items array
    };

    // Decrease item quantity
    const handleDecrease = (id) => {
        const updatedItems = items
            .map((item) => {
                if (item.id === id) {
                    if (item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return null; // Set to null if quantity becomes 0
                    }
                }
                return item;
            })
            .filter(Boolean); // Remove items that are null (i.e., quantity became 0)

        setItems(updatedItems);
    };

    // Remove item from cart
    const handleRemove = (id) => {
        const newArr = items.filter((item) => item.id !== id); // Remove the item by filtering it out
        setItems(newArr);
    };

    // Recalculate total price every time the items array changes
    useEffect(() => {
        handlePrice();
    }, [items]);

    return (
        <div>
            <div className="flex justify-center items-center gap-2">
                <p className="font-semibold text-[16px]">Total Price Of Your Cart</p>
                <p className="font-semibold text-[14px]">$ {price.toFixed(2)}</p>
            </div>

            {items.length > 0 ? (
                items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-5 mt-5">
                        <div className="flex flex-col gap-3 w-[50%]">
                            <img src={item.image} alt="image" className="h-[150px] w-[150px]" />
                            <p className="text-[12px] font-semibold">{item.title}</p>
                            <p className="text-[12px] font-bold">$ {item.price}</p>
                        </div>

                        <div className="flex items-center justify-between w-[50%]">
                            {/* Display the quantity */}
                            <div>
                                <p>{item.quantity}</p>
                            </div>

                            {/* Buttons for increasing/decreasing quantity */}
                            <div className="flex flex-col justify-center items-center gap-3">
                                <div className="flex gap-2">
                                    <button 
                                        className="px-9 py-1 rounded-lg bg-green-500" 
                                        onClick={() => handleIncrease(item.id)}
                                    >
                                        +
                                    </button>
                                    <button 
                                        className="px-9 py-1 rounded-lg bg-orange-500" 
                                        onClick={() => handleDecrease(item.id)}
                                    >
                                        -
                                    </button>
                                </div>

                                {/* Button for removing item */}
                                <button 
                                    className="px-12 py-1 rounded-lg bg-red-500" 
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
    );
};

export default AddToCart;
