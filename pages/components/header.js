import React, { Component, createRef } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/logo.png'

class Header extends Component {
    state = {
        toggle: false,
        scrolled: false
    }

    componentDidMount(){
        window.addEventListener('scroll', this.listenToScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.listenToScroll);
    }

    listenToScroll = () => {
        if(window.scrollY > 400){
            this.setState({scrolled: true})
        } else {
            this.setState({scrolled: false})
        }
    }

    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (<>
            <div className={this.state.scrolled? 'navBar-scrolled': 'navBar'}>
                <button className="hamburger"onClick={this.Toggle}>
                    {/* <FaAlignRight /> */}
                    placeholder
                </button>
                <div className="logo" href="/">
                    <Image 
                    src={logo}
                    layout='fill'
                    ></Image>
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