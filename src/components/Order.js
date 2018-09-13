import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component{
    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        const amount = this.props.order[key];
        const isAvailable = fish.status === 'available';
        if(!isAvailable){
            return <li>
                Sorry {fish ? fish.name : 'fish'} is no longer available
            </li>
        }
        else {
            return <li key={key}>
                {amount} lbs. {fish.name}

                {formatPrice(amount * fish.price)}
            </li>
        }
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
                <ul>
                    {orderIds.map(key =>
                        this.renderOrder(key)
                    )}
                </ul>
                <div className="total">
                    Total:&nbsp;
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
       )
    }
}

export default Order;