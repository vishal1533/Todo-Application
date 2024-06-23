import TodoItem from "./TodoItem";
const TodoItems = ({ Items, handleDelete }) => {
  return (
    <>
      {Items.map((Item) => (
        <TodoItem
          key={Item.todoName}
          todoDate={Item.todoDate}
          todoName={Item.todoName}
          handleDelete={handleDelete}
        ></TodoItem>
      ))}
    </>
  );
};

export default TodoItems;
