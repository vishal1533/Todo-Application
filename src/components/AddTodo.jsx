import { useRef, useContext } from "react";
import style from "./AddTodo.module.css";
import { MdAddAlert } from "react-icons/md";
import { TodoItemContext } from "../store/todo-items-store";
function AddTodo() {
  const contextObj = useContext(TodoItemContext);
  const handleAddition = contextObj.handleAddition;

  const eventNameRef = useRef("");
  const eventDateRef = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventName = eventNameRef.current.value;
    const eventDate = eventDateRef.current.value;
    eventDateRef.current.value = "";
    eventNameRef.current.value = "";
    handleAddition(eventName, eventDate);
  };
  return (
    <div className={`container text-center `}>
      <form
        className={`${style.inputContainer}  row custom-row`}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className={`${style.input_button} col-4`}>
          <input
            ref={eventNameRef}
            className={style.custom_input}
            type="text"
            placeholder="Enter todo here"
          />
        </div>
        <div className={`${style.input_button} col-4`}>
          <input
            ref={eventDateRef}
            className={style.custom_input}
            type="date"
          />
        </div>
        <div className={`col-2 custom-col-2 ${style.input_button} `}>
          <button
            className={`btn btn-success custom-button ${style.custom_input}`}
          >
            <MdAddAlert />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
