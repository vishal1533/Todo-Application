import { useContext } from "react";
import { TodoItemContext } from "../store/todo-items-store";
import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemContext);
  const TodoItems = contextObj.todoItems;
  return (
    TodoItems.length === 0 && (
      <p className={styles.WelcomeMessage}>Nothing to do today...</p>
    )
  );
};

export default WelcomeMessage;
