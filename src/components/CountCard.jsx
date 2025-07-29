import React, { Component } from 'react'

export class CountCard extends Component {
  render() {
    return (
      <div className="bg-white w-48 shadow-lg shadow-cyan-900  rounded-lg p-9 item-center text-center flex flex-col align-center hover:scale-110 transition-transform duration-200">
        <h2 className="text-xl font-bold">{this.props.title}</h2>
        <p className="text-2xl text-cyan-700">{this.props.count}</p>
      </div>
    );
  }
}

export default CountCard
