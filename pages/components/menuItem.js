import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            price: String,
            description: String,
        }
    }
    render() {
        const {
            name,
            price,
            description,
        } = this.props
        return (
            <div className="item">
                <div className="item-name">{name}</div>
                <div className="item-price">{price}</div>
                {description ?
                    <div className="item-description">
                        {description}
                    </div> :
                    <>
                    </>}
            </div>
        );
    }
}

export default MenuItem