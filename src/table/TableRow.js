import React, { Component } from 'react';

export class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.orderId}</td>
        <td>{this.props.customerId}</td>
        <td>{this.props.deliveryPincode}</td>
        <td>{this.props.orderDate}</td>
        <td>{this.props.items}</td>
      </tr>
    )
  }
}

export default TableRow;