import React, { Component } from 'react';
import TableRow from './TableRow';

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
      <table className='tableStyle'>
        <thead>
          <tr>
            <th>OrderId</th>
            <th>CustomerId</th>
            <th>Pincode</th>
            <th>OrderDate</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody className='tableBodyStyle'>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Table;