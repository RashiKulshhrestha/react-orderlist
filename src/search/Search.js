import React, { Component } from 'react';

export class Search extends Component {

  handleOnChange = (e) => {
    //console.log('value: '+e.target.value+ ' name: '+ e.target.name);
    this.props.handleSearchEvents(e.target.value, e.target.name);
  };

  render() {
    return (
      <form className='Search-container'>
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