import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemContext } from "../store/todo-items-store";
const TodoItems = () => {
  const contextObj = useContext(TodoItemContext);
  const Items = contextObj.todoItems;
  return (
    <>
      {Items.map((Item) => (
        <TodoItem
          key={Item.todoName}
          todoDate={Item.todoDate}
          todoName={Item.todoName}
          // handleDelete={handleDelete}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
