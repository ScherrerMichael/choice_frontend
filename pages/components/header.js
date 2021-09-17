import React, { Component, createRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'

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
                <button className="hamburger"onClick={this.Toggle}>
                    {/* <FaAlignRight /> */}
                    placeholder
                </button>
                <div className="logo" href="/">
                    <Image src={logo}></Image>
                </div>
                <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <li className={this.state.toggle ? "links show-nav" : "links"} href="#">
                        <Link href="/menu">
                            <a>Menu</a>
                        </Link>
                    </li>
                    <li className={this.state.toggle ? "links show-nav" : "links"} href="#">
                        <Link href="/events">
                            <a>Events</a>
                        </Link>
                        </li>
                    <li className={this.state.toggle ? "links show-nav" : "links"} href="#">
                        <Link href="/Contact">
                            <a>Contact</a>
                        </Link>
                        </li>
                </ul>
            </div>
        </>
        );
    }
}



export default Header;