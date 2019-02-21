import React, { Component } from 'react'

export default class Projetos extends Component {
  render() {
    return (
      <div className="projetoBox">
        <h1>{this.props.nome}</h1>
        <img src={this.props.img} alt="img" height="100px" width="auto" />
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
