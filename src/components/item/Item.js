
import React from 'react';

import ItemTabs from '../item-tabs/ItemTabs';
import getSymbolFromCurrency from 'currency-symbol-map'

// import styles from './Item.module.css'



const Item = ({ value: item, onBuy, cartItemQty }) => {


    const handleBuy = (item, qty) => {
        if (onBuy)
            onBuy(item, qty)
    }

    const renderBuyBtn = (item) => {
        return (<button onClick={e => handleBuy(item,1)} disabled={!item.canBuy || item?.availableQty === 0 || cartItemQty === item.availableQty} className="btn btn-sm btn-dark">Add to Cart</button>)
    }
    const renderCancelBtn = (item) => {
        return (<button onClick={e => handleBuy(item,-1)} disabled={!item.canBuy} className="btn btn-sm btn-dark">Remove from Cart</button>)
    }
    const renderPrice = (item) => {
        const currencySymbol = getSymbolFromCurrency(item.currency)
        return `${currencySymbol} ${item.price}`
    }
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <img className="img-fluid" src={item.image} alt={item.name} />
                </div>
                <div className="col-9">
                    <h5>{item.name}</h5>
                    <h6>{renderPrice(item)}</h6>
                    {(item.availableQty > 0)?
                    (
                        <>
                        <h6>In Stock</h6>
                        <h6>{item?.availableQty} available in stock</h6>
                        </>
                    ):
                    (
                        <h6>Out of Stock</h6>
                    )
                    }
                    {renderBuyBtn(item)} &nbsp; <span className="badge badge-warning">{cartItemQty}</span> &nbsp; 
                    {cartItemQty > 0 &&
                        renderCancelBtn(item)
                    }
                    <br />
                    <div className='mt-3'>
                    <ItemTabs value={item} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;