import React, { Fragment } from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <Fragment>
                <form className="store-selector">
                    <input type="text" required placeholder="Store Name"/>
                    <button type="submit">Visit Store -></button>
                </form>
            </Fragment>
        )
    }
}

export default StorePicker;
