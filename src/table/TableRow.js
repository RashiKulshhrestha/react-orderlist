import React, { Component } from 'react';
import "./table.css";

export class TableRow extends Component {
  render() {
    let item = this.props.itemsRow;
    let result = item.map((value) => {
      let subrow = value.split(":").join(" - ");
      return[
        <tr>
          <td>{subrow}</td>
        </tr>
      ]
    })
    return (
      <tr className="tablerow-container">
        <td>{this.props.orderId}</td>
        <td>{this.props.customerId}</td>
        <td>{this.props.deliveryPincode}</td>
        <td>{this.props.orderDate}</td>
        <td>{result}</td>
      </tr>
    )
  }
}

export default TableRow;