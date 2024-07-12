import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemContext } from "./store/todo-items-store";

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
    <TodoItemContext.Provider
      value={{ todoItems, handleDelete, handleAddition }}
    >
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMessage></WelcomeMessage>
        <div className="items-container">
          <TodoItems></TodoItems>
        </div>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
