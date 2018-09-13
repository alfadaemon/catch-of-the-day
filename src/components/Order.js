import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component{
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const amount = this.props.order[key];
        const isAvailable = fish && fish.status === 'available';

        // Catch when fishes are not loaded.
        if(!fish) return null;

        if(!isAvailable){
            return <li key={key}>
                Sorry {fish ? fish.name : 'fish'} is no longer available
            </li>
        }

        return <li key={key}>
            <p className="count">{amount} lbs.</p>{fish.name}
           <p className="price">{formatPrice(amount * fish.price)}</p>
        </li>
    }

    render(){
        const orderIds = Object.keys(this.props.order)
        const total = orderIds.reduce( (sum, key) => {
            const fish = this.props.fishes[key];
            const amount = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';

            if(isAvailable)
                return sum + (amount * fish.price);
            else
                return sum;
        }, 0);

        return (
            <div className="order-warp">
                <h2>Order</h2>
                <div className="total">
                    Total:&nbsp;
                    <strong>{formatPrice(total)}</strong>
                </div>
                <ul className="order">
                    {orderIds.map(key =>
                        this.renderOrder(key)
                    )}
                </ul>
                <div className="total">
                    Total:&nbsp;
                    <strong className="price">{formatPrice(total)}</strong>
                </div>
            </div>
       )
    }
}

export default Order;