import React from "react";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.item &&
          props.item.map((items, idx) => <li key={idx}>{items}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
