import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice';
import { removeFromWishlist } from '../redux/wishlistSlice';

const Wishlist = () => {

    const dispatch = useDispatch();

    const wishlist = useSelector((state) => state.wishlist.list);

    // const wishlist = [{
    //     id: 101,
    //     title: "Apple AirPods Max Silver",
    //     description: "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
    //     category: "mobile-accessories",
    //     price: 549.99,
    //     rating: 3.47,
    //     stock: 59,
    //     brand: "Apple",
    //     images: [
    //         "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
    //     ],
    //     "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp"
    // }]

    return (
        <div className='product-section'>
            <h2 className='heading'>Wishlist</h2>
            <p className='heading_desc'> All your favorite products </p>

            <div className='products_container'>

                {
                    wishlist.length > 0 && (wishlist.map((product) => (<div className='product_container'>


                        <div className='img_containter'>
                            <img src={product.images?.[0]} alt="product image" />
                        </div>
                        <div className='product_data'>
                            <h4 className='title'>{product.title}</h4>

                            <div className='data_container'>
                                <p className='brand'>{product.brand}</p>
                                <p className='price'> <span>{product.price}</span></p>
                            </div>
                            {/* <p className='description'>{product.description}</p> */}
                        </div>
                        <div className='wbt_container'>
                            <button className='btn' onClick={() => { dispatch(addToCart(product)) }}> Add to Cart </button>
                            <button className='btn' onClick={() => { dispatch(removeFromWishlist(product)) }}> Remove From Wishlist  </button>
                        </div>

                    </div>)))
                }


            </div>


        </div>
    )
}

export default Wishlist