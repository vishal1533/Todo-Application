import { useState } from "react";
import style from "./AddTodo.module.css";
function AddTodo({ handleAddition }) {
  let [eventName, setEventName] = useState("");
  let [eventDate, setEventDate] = useState("");
  return (
    <div className="container text-center">
      <div className="row custom-row">
        <div className="col-4">
          <input
            className={style.custom_input}
            type="text"
            placeholder="Enter todo here"
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          />
        </div>
        <div className="col-4">
          <input
            className={style.custom_input}
            type="date"
            onChange={(event) => {
              setEventDate(event.target.value);
            }}
          />
        </div>
        <div className="col-2 custom-col-2">
          <button
            className="btn btn-success custom-button"
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
