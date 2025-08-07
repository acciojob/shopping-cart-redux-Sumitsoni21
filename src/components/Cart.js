import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import Coupon from './Coupon';

const Cart = () => {

    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart.items);
    const total = carts.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    const totalQuantity = carts.reduce((acc, item) => acc + item.quantity, 0);

    const discount = useSelector((state) => state.coupon.discount);


    // const carts = [{
    //     id: 101,
    //     title: "Apple AirPods Max Silver",
    //     description: "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    //     category: "mobile-accessories",
    //     price: 549.99,
    //     rating: 3.47,
    //     stock: 59,
    //     brand: "Apple",
    //     quantity: 1,
    //     images: [
    //         "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
    //     ],
    //     "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp"
    // }, {
    //     id: 101,
    //     title: "Apple AirPods Max Silver",
    //     description: "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    //     category: "mobile-accessories",
    //     price: 549.99,
    //     rating: 3.47,
    //     stock: 59,
    //     brand: "Apple",
    //     quantity: 1,
    //     images: [
    //         "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
    //     ],
    //     "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp"
    // }]
    return (
        <div className='cart-section'>



            <div className="cart-container">
                {/* Left - Products */}
                <div className="cart-left">
                    <h2 className='cart_heading '>Cart ({carts.length})</h2>
                    <div className='line'></div>
                    {carts.map((item) => (
                        <div className="product-card">
                            <img src={item.images[0]} alt={item.title} />
                            <div className="product-info">
                                <h4>{item.title}</h4>
                                <p>₹{item.price}</p>
                                <div className='cart_btn_container'>
                                    <button className='cart_btn' onClick={() => { dispatch(increaseQuantity(item)) }} >+</button>
                                    <div className='quantity'>{item.quantity}</div>
                                    <button className='cart_btn' onClick={() => { dispatch(decreaseQuantity(item)) }}>-</button></div>
                            </div>

                            <div className='cart_btn_section'>
                                <button className='checkout-btn' onClick={() => { dispatch(removeFromCart(item)) }}>Remove from cart </button>
                                <button className='checkout-btn' onClick={() => {
                                    dispatch(addToWishlist(item)); dispatch(removeFromCart(item))

                                }}>Move to Wishlist</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right - Checkout */}
                <div className="cart-right">
                    <h2>Order Summary</h2>
                    <p>Items: {totalQuantity}</p>
                    <p>MRP: ₹{total}</p>
                    <div><Coupon /></div>
                    <p>Discount:  {((total * discount) / 100).toFixed(2)}</p>
                    <p >Total: ₹{discount > 0 ? (total - ((total * discount) / 100)).toFixed(2) : total}</p>

                    <button className="checkout-btn" onClick={() => { dispatch(clearCart()) }}>Proceed to Checkout</button>
                </div>
            </div>

        </div>




    )
}

export default Cart