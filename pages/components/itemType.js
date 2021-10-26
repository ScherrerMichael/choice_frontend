import React, { Component } from 'react';

class ItemType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: String,
            parenthesis: String,
        }
    }
    render() {
        const {
            name,
            parenthesis,
        } = this.props
        return (
            <div ref={this.props.refProp} className="item-type">
                <strong>{name}</strong>
                <span className="group-par">{parenthesis}</span>
            </div>
        );
    }
}

export default ItemType