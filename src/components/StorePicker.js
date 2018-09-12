import React, { Fragment } from 'react';
import {getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {
        //Stop de form from submitting
        event.preventDefault();
        let storeName = this.myInput.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.goToStore} className="store-selector">
                    <input 
                        ref={this.myInput}
                        type="text" 
                        required 
                        placeholder="Store Name" 
                        defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store →</button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;
