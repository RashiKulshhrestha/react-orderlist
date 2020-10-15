import React, { useEffect, useState } from "react";
import * as d3 from 'd3';
import data from "./data.csv";
import Table from "../table/Table";

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
                <Table data ={table}/>
            </main>
        </div>
    )
}
export default Dashboard;