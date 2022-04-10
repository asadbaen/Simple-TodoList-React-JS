import React from "react";
import TodoList from "./TodoList";

export default class FromTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: "",
      item: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      // item: this.state.item.concat([this.state.todoItems]),
      item: [...this.state.item, this.state.todoItems],
      todoItems: "",
    });
    console.log("success !");
  };

  handleOnchange = (e) => {
    e.preventDefault();
    this.setState({
      todoItems: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <>
        <h1>Form Input Todo </h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="TodoList"
            value={this.state.todoItems}
            onChange={this.handleOnchange}
          />
          <button>Add</button>
        </form>
        <TodoList item={this.state.item} />
      </>
    );
  }
}
