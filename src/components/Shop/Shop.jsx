import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedProduct = [];
        // step 1: getting the id from localStorage object
        for(const id in storedCart){
            // step 2: finding the product according to the id(localStorage)
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
            // step 3: setting the product quantity according to the localStorage quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
            // step 4: adding the addedProduct to the savedProduct(cart)
                savedProduct.push(addedProduct);
            }
        }
            // step 5: setCart(savedProduct) according to new savedProduct array
            setCart(savedProduct);

    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart)
        addToDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product= {product}
                        handleAddToCart= {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;