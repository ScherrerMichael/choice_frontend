import React, { Component, createRef } from 'react';

class Header extends Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (<>
            <div className="navBar">
                <button onClick={this.Toggle}>
                    {/* <FaAlignRight /> */}
                    placeholder
                </button>
                <div className="logo" href="#">Choice</div>
                <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <li className={this.state.toggle? "links show-nav" : "links"} href="#">Home</li>
                    <li className={this.state.toggle? "links show-nav" : "links"} href="#">About us</li>
                    <li className={this.state.toggle? "links show-nav" : "links"} href="#">Contact</li>
                </ul>
            </div>
        </>
        );
    }
}



export default Header;