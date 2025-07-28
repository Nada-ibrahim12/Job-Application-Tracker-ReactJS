import React, { Component } from 'react'

export class CountCard extends Component {
  render() {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 item-center">
        <h2 className="text-xl font-bold">{this.props.title}</h2>
        <p className="text-2xl text-cyan-700">{this.props.count}</p>
      </div>
    )
  }
}

export default CountCard
