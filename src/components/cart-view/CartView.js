import React from 'react';

const CartView = ({ value: cart, history, onBuy , totalqty, totalsum }) => {

    if (Object.keys(cart).length === 0) {
        return (
            <>
            <div> cart is empty</div>
            <button className="btn btn-sm btn-dark mt-3" onClick={e => history.goBack()}>back</button>
            </>
        )
    }

    const handleBuy = (item, qty) => {
        if (onBuy)
            onBuy(item, qty)
    }

    const renderCartItems = cart => {
        let keys = Object.keys(cart)
        return keys.map(key => {
            let cartLine = cart[key]
            let { item, qty } = cartLine;
            console.log(cartLine,"fgrs");
            return (
                <tr key={key}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>
                        {item.availableQty !== qty &&
                            <span className="badge badge-dark" onClick={e => handleBuy(item, 1)}>
                                <i className="fa fa-plus"></i>
                                </span>
                        }
                        <span className="pl-2 pr-2">{qty}</span>
                        <span className="badge badge-dark" onClick={e => handleBuy(item, -1)}>
                            <i className="fa fa-minus"></i>
                        </span>
                    </td>
                    <td>&#8377;{item.price * qty}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <div className="">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                    <tfoot>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>{totalqty}</th>
                            <th>&#8377;{totalsum}</th>
                    </tfoot>
                </table>
            </div>
            <button className="btn btn-sm btn-dark mt-3" onClick={e => history.goBack()}>back</button>
        </div>
    );
};

export default CartView;