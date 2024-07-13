import { createContext, useReducer } from "react";
export const TodoItemContext = createContext({
  todoItems: {},
  handleDelete: () => {},
  handleAddition: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        todoName: action.payload.eventName,
        todoDate: action.payload.eventDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.todoName !== action.payload.todoName
    );
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, [
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
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        eventName,
        eventDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const handleDelete = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { todoName },
    };

    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemContext.Provider
      value={{ todoItems, handleDelete, handleAddition }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
