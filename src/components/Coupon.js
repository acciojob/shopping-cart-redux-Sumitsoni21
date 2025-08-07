import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { applyCoupon } from '../redux/couponSlice';

const Coupon = () => {

    const [code, setCode] = useState('')

    const dispatch = useDispatch();

    const handleApply = () => {
        dispatch(applyCoupon(code));
    }
    return (
        <div>
            <label htmlFor='coupon' >Apply Coupon: </label>
            <input id='coupon' type='text' value={code} onChange={(e) => { setCode(e.target.value) }} />
            <button className='discount_btn' onClick={handleApply}>Apply</button>
        </div>
    )
}

export default Coupon