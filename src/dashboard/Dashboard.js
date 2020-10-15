import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import data from "./data.csv";

const Dashboard = () => {
    const [content, setContent] = useState([]);
    useEffect(() => {
        //reference taken by stackoverflow
        d3.csv(data).then(function(content) {
            setContent(content);
        }).catch(function(err) {
            throw err;
        })
    },[]);
    var table = content;
    console.log(table);
    return(
        <div>
            <header>List of Orders</header>
            <main>
                <table>
                    <thead>
                        <tr>
                        <th>Order ID</th>
                        <th>Cust_ID</th>
                        <th>Pin Code</th>
                        <th>Order Date</th>
                        <th>Items</th>
                        </tr>
                    </thead>
                    <tbody>
                    {table.map(function(table, key){
                        return(
                        <tr key={key}>
                            <td>{table.orderId}</td>
                            <td>{table.customerId}</td>
                            <td>{table.deliveryPincode}</td>
                            <td>{table.orderDate}</td>
                            <td>{table.items}</td>
                        </tr>
                        )
                    })}
                    </tbody>
      
                </table>
            </main>
        </div>
    )
}
export default Dashboard;