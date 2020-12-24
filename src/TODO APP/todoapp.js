import React, { Component } from "react";
import "./todoapp.css";

export default class todoapp extends Component {
  state = {
    input: "",
    items: [],
  };


  storeItems = (event) => {
    event.preventDefault()
    const { input,items } = this.state; // this.state.input enn parayunnathin parakarm
    /* const allItems = this.state.items;
        allItems.push(input);
        this.setState({
            items: allItems
        }) */
    this.setState({
       items : [...items, input], // spread operator vech items copy edth
      input: ""
    })
  };


  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  // [event.target.name] kure input undel
deleteItem = index => {
  // const allItems = this.state.items;
  // allItems.splice(index,1);
  // this.setState({
  //   items: allItems
  // })

  this.setState({
    items: this.state.items.filter((value,key) => index !== key)
  });
};

  render() {
    const { input,items } = this.state;
    return (
      <div className="todo-container">

        <form className="input-section" onSubmit={this.storeItems}>
          <h1>Todo App</h1>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Enter items..."
            value={input}
          ></input>
        </form>
        <ul>
        {items.map((value,index)=> (
          <li key={index}>{value} <i className="fas fa-trash-alt" onClick={()=>this.deleteItem(index)}></i></li>
        ))}
        </ul>
      </div>
    );
  }
}


