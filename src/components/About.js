import React, { Component } from 'react';
import Righty from './Righty';

export default class About extends Component {
  render() {
    return (
      <div className="mainAboutWrapper">
        <div className="displayFlexAbout">
            <div className="leftSideAbout">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repudiandae at, eligendi natus accusantium explicabo distinctio ratione architecto in corporis expedita culpa veritatis, temporibus quo iusto eaque modi enim voluptas.</p>
            </div>
            <div className="rightSideAbout">
                <p><span>Sobre</span> <br /> Mim</p>
            </div>
        </div>
        <Righty />
      </div> 
    )
  }
}
