import React, { Component } from 'react';
import TableRow from './TableRow';

export class Table extends Component {
  render() {
    let rows = [];

    //generate the table rows
    //based on container representational pattern and Hook, CountryTable should not have business logic
    this.props.data.forEach((dataObj) => {
      rows.push(
        <TableRow
          key={dataObj.key}
          orderId={dataObj.orderId}
          customerId={dataObj.customerId}
          deliveryPincode={dataObj.deliveryPincode}
          orderDate={dataObj.orderDate}
          items={dataObj.items} />);
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