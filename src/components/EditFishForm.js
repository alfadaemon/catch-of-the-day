import React from 'react';
import {formatPrice} from '../helpers';

class EditFishForm extends React.Component{
    handleChange = event => {
        const updateFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updateFish)
    }

    render(){
        const fish = this.props.fish;
       return ( 
        <div className="fish-edit">
            <input onChange={this.handleChange} type="text" name="name" value={fish.name} />
            <input onChange={this.handleChange} type="text" name="price" value={(fish.price)} />
            <select onChange={this.handleChange} name="status"  value={fish.status}>
                <option value="available">Fresh</option>
                <option value="unavailable">Sold Out</option>
            </select>
            <textarea onChange={this.handleChange} placeholder="Description" name="desc" value={fish.desc} />
            <input onChange={this.handleChange} type="text" name="image" value={fish.image} />
        </div>
       )
    }
}

export default EditFishForm;