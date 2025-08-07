import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice';

const Products = () => {

    const dispatch = useDispatch();

    const handleClick = (product) => {
        dispatch(addToCart(product))
    }

    const products = [{
        id: 101,
        title: "Apple AirPods Max Silver",
        description: "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
        category: "mobile-accessories",
        price: 549.99,
        rating: 3.47,
        stock: 59,
        brand: "Apple",
        images: [
            "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp"
    }, {
        id: 102,
        title: "Nokia AirPods Max Silver",
        description: "The Apple AirPods Max in Silver are premium over-ear headphones with high-fidelity audio, adaptive EQ, and active noise cancellation. Experience immersive sound in style.",
        category: "mobile-accessories",
        price: 549.99,
        rating: 3.47,
        stock: 59,
        brand: "Apple",
        images: [
            "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/1.webp"
        ],
        "thumbnail": "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp"
    }]

    return (
        <div className='product-section'>
            <h2 className='heading'>All Products</h2>
            <p className='heading_desc'> All products that available to order</p>
            <div className='products_container'>

                {
                    products.length > 0 && (products.map((product) => (<div key={product.id} className='product_container'>


                        <div className='img_containter'>
                            <img src={product.images?.[0]} alt="product image" />
                        </div>
                        <div className='product_data'>
                            <h4 className='title'>{product.title}</h4>

                            <div className='data_container'>
                                <p className='brand'>{product.brand}</p>
                                <p className='price'> <span>{product.price}</span></p>
                            </div>
                            <p className='description'>{product.description}</p>
                        </div>
                        <button className='btn' onClick={() => { handleClick(product) }}> Add to Cart </button>

                    </div>)))
                }


            </div>


        </div>
    )
}

export default Products