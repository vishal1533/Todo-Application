import { useState } from "react";
import style from "./AddTodo.module.css";
function AddTodo({ handleAddition }) {
  let [eventName, setEventName] = useState("");
  let [eventDate, setEventDate] = useState("");
  return (
    <div className={`container text-center `}>
      <div className={`${style.inputContainer}  row custom-row`}>
        <div className={`${style.input_button} col-4`}>
          <input
            className={style.custom_input}
            type="text"
            placeholder="Enter todo here"
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          />
        </div>
        <div className={`${style.input_button} col-4`}>
          <input
            className={style.custom_input}
            type="date"
            onChange={(event) => {
              setEventDate(event.target.value);
            }}
          />
        </div>
        <div className={`col-2 custom-col-2 ${style.input_button} `}>
          <button
            className={`btn btn-success custom-button ${style.custom_input}`}
            onClick={() => {
              handleAddition(eventName, eventDate);
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
