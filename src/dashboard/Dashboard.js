import React, { Component } from "react";
import Table from "../table/Table";
import Search from "../search/Search";
import * as d3 from 'd3'; // package is used to read .csv file
import data from "./data.csv";
import "./dashboard.css";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.data = [];
        this.state = {
          pincode: '',
          orderDate: '',
          isLoading: true,
        };
      }
    componentDidMount(){
        // console.log("array");
        //reference taken by stackoverflow
        //problem faced: convert the .csv file data in the form of array of objects.
        d3.csv(data).then((data) => {
            let array = [];
            // console.log(array);
            for(let i=0; i<data.length; i++){
                let entry = {};
                entry.orderId = data[i].orderId;
                entry.customerId = data[i].customerId;
                entry.deliveryPincode = data[i].deliveryPincode;
                entry.orderDate = data[i].orderDate;
                entry.items = data[i].items;
                array[i] = entry;
                // console.log(entry);
            }
            this.data = array;
            this.setState({
                isLoading: false,
            }); 
            //console.log(array);
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
    
    handleSearchEvents = (title, name) => {
        this.setState({ [name]: title });
    }

    render(){
        // console.log(this.data);
        const filteredData = this.data.filter((dataObj)=> (dataObj.deliveryPincode.indexOf(this.state.pincode) !== -1)&&
        (dataObj.orderDate.indexOf(this.state.orderDate) !== -1));

        return(
            <div className="dashboard-container">
                <header>
                    <div className="heading-h1">
                        List of Orders
                    </div>
                </header>
                <main>
                <Search
                    pincode={this.state.pincode}
                    date={this.state.orderDate}
                    handleSearchEvents={this.handleSearchEvents} />
                <Table
                    pincode={this.state.pincode}
                    date={this.state.date}
                    data={filteredData} />
                </main>
            </div>
        )
    }
}
export default Dashboard;