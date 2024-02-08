import AppName from "./component/AppName"
import AddTodo from "./component/AddTodo"
import AddItemone from "./component/AddItemone";
import TodoItem2 from "./component/todoItem2";
import "./App.css";




function App() {
  return (
    <center className='tode-container' >
      <AppName />
      <AddTodo />
      <div className="item-container">
      <AddItemone></AddItemone>
      <TodoItem2></TodoItem2>
      </div>

    </center>
  );
}

export default App;
