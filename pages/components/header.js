import React, { Component, createRef } from 'react';
import Link from 'next/link'

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
                        height={65}
                        width={45}
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
                    <Link href="/"
                    onClick={this.Toggle}
                    >
                        <a>Home</a>
                    </Link>
                </div>
                <div className="link" href="#">
                    <Link href="/menu"
                    onClick={this.Toggle}
                    >
                        <a>Menu</a>
                    </Link>
                </div>
                <div className="link" href="#">
                    <Link href="/events"
                    onClick={this.Toggle}
                    >
                        <a>Events</a>
                    </Link>
                </div>
                <div className="link" href="#">
                    <Link href="/#to-schedule"
                    onClick={this.Toggle}
                    >
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