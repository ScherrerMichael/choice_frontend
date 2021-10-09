import React, { Component, createRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'

class Header extends Component {
    state = {
        toggle: false,
        scrolled: false
    }

    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (<>
            <div className="navBar">
                <div className="logo-header">
                <Link
                href="/"
                >
                    <a>
                    <img
                    height={54}
                        width={40}
                        src="/logo.png"
                        alt="Logo of Choice Deli"
                    ></img>
                    </a>
                </Link>
                </div>
                <button className="hamburger" onClick={this.Toggle}>
                    placeholder
                </button>
            <div className={this.state.toggle? "show-nav" : "nav-links"}>
                <div className="link">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div className="link" href="#">
                    <Link href="/menu">
                        <a>Menu</a>
                    </Link>
                </div>
                <div className="link" href="#">
                    <Link href="/events">
                        <a>Events</a>
                    </Link>
                </div>
                <div className="link" href="#">
                    <Link href="/#to-schedule">
                        <a>Contact</a>
                    </Link>
                </div>
            </div>
            </div>
        </>
        );
    }
}



export default Header;