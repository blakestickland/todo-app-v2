
const TodoRow = ({todo, updateTodo, deleteTodo }) => {
    return (
      <tr>
        <td>{todo.id}</td>
        <td>{todo.description}</td>
        <td>{todo.targetDate.toString()}</td>
        <td>{todo.done.toString()}</td>
        <td><button className="btn btn-success" onClick={() => {updateTodo(todo.id)}}>Update</button></td>
        <td><button className="btn btn-warning" onClick={() => {deleteTodo(todo.id)}}>Delete</button></td>
      </tr>
    );
  }

  export default TodoRow;