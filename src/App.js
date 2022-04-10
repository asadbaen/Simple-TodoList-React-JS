import { FormTodo } from "./components/Todo";
import "./App.css";

function App() {
  const name = "Learn to make a Simple TodoList with react js";
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>coba berubah gak</p>
      <FormTodo />
    </div>
  );
}

export default App;
