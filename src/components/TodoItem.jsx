function TodoItem({ todoDate, todoName, handleDelete }) {
  return (
    <div className="container">
      <div className={`row custom-row`}>
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 custom-col-2">
          <button
            className="btn btn-danger custom-button"
            onClick={() => {
              handleDelete(todoName);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
