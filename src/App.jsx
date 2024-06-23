import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([
    {
      todoName: "Buy Milk",
      todoDate: "24/02/2024",
    },
    {
      todoName: "Go To College",
      todoDate: "24/02/2024",
    },
    {
      todoName: "It's a Lovely Day",
      todoDate: "02/02/2024",
    },
  ]);

  const handleAddition = (eventName, eventDate) => {
    let newTodoTask = {
      todoName: eventName,
      todoDate: eventDate,
    };
    setTodoItems([...todoItems, newTodoTask]);
  };

  const handleDelete = (todoName) => {
    const updatedTodoItems = todoItems.filter(
      (item) => item.todoName !== todoName
    );
    setTodoItems(updatedTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo handleAddition={handleAddition}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <div className="items-container">
        <TodoItems Items={todoItems} handleDelete={handleDelete}></TodoItems>
      </div>
    </center>
  );
}

export default App;
