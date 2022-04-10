import React from "react";
import ListTodo from "./ListTodo";

class FormTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: "",
      des: "",
      items: [],
      deskrip: [],
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.listItems],
      deskrip: [...this.state.deskrip, this.state.des],
      listItems: "",
      des: "",
    });
    console.log("OK");
  };

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({
      listItems: e.target.value,
    });
    console.log("items Ok : " + e.target.value);
  };

  handleOnChangeDes = (e) => {
    e.preventDefault();
    this.setState({
      des: e.target.value,
    });
    console.log("Des Ok : " + e.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h2>Login Sistem</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Username </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukan username anda"
                  value={this.state.listItems}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <label>Example textarea</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={this.state.des}
                  onChange={this.handleOnChangeDes}
                ></textarea>
              </div>
              <br />
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Submit
              </button>
            </form>
            <ListTodo items={this.state.items} des={this.state.deskrip} />
          </div>
        </div>
      </div>
    );
  }
}
export default FormTodo;
