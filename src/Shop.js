import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from './state';
import { bindActionCreators } from 'redux';

function Shop() {

    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch)
    
    return (
        <div >
            <h1 className='d-flex justify-content-center align-items-center my-5'>Add or Remove Balance in Your Accout</h1>
            <div className='d-flex justify-content-center align-items-center my-5'>
            <button type="button" className="btn btn-danger mx-5" onClick={()=>{dispatch(actionCreators.withdrawMoney(10))}} >Deduct - $10</button>
            <button type="button" className="btn btn-success mx-5" onClick={()=>{depositMoney(10)}}>Add + $10</button>
            </div>
        </div>
    )
}

export default Shop