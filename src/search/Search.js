import React, { Component } from 'react';
import "./search.css";

export class Search extends Component {

  handleOnChange = (e) => {
    this.props.handleSearchEvents(e.target.value, e.target.name);
  };

  render() {
    return (
      <form className='Search-container'>
        <label>Orders filtered by :</label>
        <input 
          type="text"
          name='pincode'
          value={this.props.pincode}
          onChange={this.handleOnChange}
          placeholder='Pincode...'/>
        <input 
          type="text" 
          name='orderDate'
          value={this.props.orderDate}
          onChange={this.handleOnChange}
          placeholder='Date...'/>
        
      </form>
    )
  }
}

export default Search;