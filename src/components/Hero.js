import React, { Component } from 'react';
import Lefty from './Lefty';
import menu from '../assets/menu.png';
import Close from '../assets/colorClose.png';
// import { Link, animateScroll as scroll } from "react-scroll";

export default class Hero extends Component {

    state={
        isOpen: false,
    }

    openNav = () => {
        this.setState({ isOpen: true })
    }

    closeNav = () => {
        this.setState({ isOpen: false })
    }

  render() {
    return (
      <div className="mainHeroWrapper">
        <Lefty />
        <img src={menu} alt="menu" className="navMenu" onClick={this.openNav}/>
        <div className="displayFlex">
            <div className="leftSideHero"></div>
            <div className="rightSideHero"></div>
        </div>
        <div className="centerText">
            <h1>Nicolas<br />Marqui</h1>
            <p>Web Developer</p>
        </div>
        <div className="fullNav" style={this.state.isOpen ? {display: 'flex'} : {display: 'none'}}>
            <img src={Close} alt="close" className="closeNav" onClick={this.closeNav}/>
            <div className="centerNavItems">
                <ul>
                    <li><a href="_">Home</a></li>
                    <li><a href="_">About</a></li>
                    <li><a href="_">Portfolio</a></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
