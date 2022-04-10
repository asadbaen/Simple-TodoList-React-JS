import React from "react";

const ListTodo = (props) => {
  const data = {
    items: props.items,
    des: props.des,
  };
  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{data.items}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">{data.des}</p>
          <a href="!#" className="card-link">
            Card link
          </a>
          <a href="!#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};
export default ListTodo;
