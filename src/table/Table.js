import React, { Component } from 'react';
import TableRow from './TableRow';
import "./table.css";

export class Table extends Component {
  render() {
    let rows = [];
    
    this.props.data.forEach((dataObj) => {
      let arr = dataObj.items.split(';');
      rows.push(
        <TableRow
          key={dataObj.key}
          orderId={dataObj.orderId}
          customerId={dataObj.customerId}
          deliveryPincode={dataObj.deliveryPincode}
          orderDate={dataObj.orderDate}
          items={dataObj.items}
          itemsRow= {arr}/>);
          
    });
    return (
      <table className='table-container'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer Id</th>
            <th>Pin Code</th>
            <th>Order Date</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody className='table-body'>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Table;