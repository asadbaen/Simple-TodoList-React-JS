import { FormTodo, Todo } from "./components";
import "./App.css";

function App() {
  const name = "Learn to make a Simple TodoList with react js";
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>coba berubah gak</p>
      <FormTodo />
      <Todo />
    </div>
  );
}

export default App;
