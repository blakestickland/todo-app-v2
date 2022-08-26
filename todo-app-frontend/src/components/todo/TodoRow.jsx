
const TodoRow = ({todo, deleteTodo }) => {
    return (
      <tr>
        <td>{todo.id}</td>
        <td>{todo.description}</td>
        <td>{todo.targetDate.toString()}</td>
        <td>{todo.done.toString()}</td>
        <td><button className="btn btn-warning" onClick={() => {deleteTodo(todo.id)}}>Delete</button></td>
      </tr>
    );
  }

  export default TodoRow;