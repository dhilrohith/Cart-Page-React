import { useEffect, useState } from 'react';
import DisplayCart from './DisplayCart';
import axios from 'axios';
import NavBar from './NavBar';
import AddToCart from './AddToCart';

const CreateCart = () => {

    const [products, setProducts] = useState([])
    const [items, setItems] = useState([])
    const [isCartOpen, setIsOpenCart] = useState(false)

    const openCart = () => {
        setIsOpenCart(true)
    }

    const closeCart = () => {
        setIsOpenCart(false)
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
    }

    const addItem = (item) => {
        // console.log(item)
        let isPresent = false;
        items.forEach((ele) => {
            if (item.id === ele.id) {
                isPresent = true;
                console.log(ele)
            }
        })
        if (isPresent) {
            window.alert(" Product Is Already Added To Cart")
            return;
        }

        setItems([...items, { ...item, quantity: 1 }])
        // console.log(items);
    }

    return (
        <div>
            <NavBar count={items.length} openCart={openCart} />
            <div className="bg-slate-200  ">
                <div className="flex flex-wrap w-[90%] m-[auto] flex-col md:flex-row  gap-4
            pt-5 ">
                        {
                            products.map((product) => (
                                <DisplayCart key={product.id} product={product} addItem={addItem} />
                            ))
                        }
                </div>
            </div>

            {/* Modal for AddToCart */}
            {isCartOpen && (
                <div className=" fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-5 w-[90%] md:w-[50%] relative rounded-lg max-h-[80vh] overflow-y-auto">
                        <button
                            className="absolute top-2 right-2 text-red-500 font-bold 
                            active:bg-red-600 active:text-white
                            rounded-[100%] flex-shrink-0 px-2 shadow-md shadow-red-400"
                            onClick={closeCart}
                        >
                            X
                        </button>

                        <AddToCart items={items} setItems={setItems} /> {/* Render the cart items */}
                    </div>
                </div>
            )}
        </div>

    );
};

export default CreateCart;