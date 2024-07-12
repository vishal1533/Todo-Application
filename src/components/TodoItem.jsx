import { useContext } from "react";
import style from "./TodoItem.module.css";
import { MdDelete } from "react-icons/md";
import { TodoItemContext } from "../store/todo-items-store";
function TodoItem({ todoDate, todoName }) {
  const contextObj = useContext(TodoItemContext);
  const handleDelete = contextObj.handleDelete;

  const onClickedDelete = (todoName) => {
    setTimeout(() => {
      handleDelete(todoName);
    }, 100); // Wait for the animation to finish before deleting the item
  };

  return (
    <div className="container">
      <div className={`row custom-row`}>
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 custom-col-2">
          <button
            className={`btn btn-danger custom-button ${style.delete_button}`}
            onClick={() => {
              onClickedDelete(todoName);
            }}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
