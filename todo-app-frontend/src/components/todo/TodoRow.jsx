
  const TodoRow = ({todo}) => {
    return (
      <tr>
        <td>{todo.id}</td>
        <td>{todo.description}</td>
        <td>{todo.targetDate.toString()}</td>
        <td>{todo.done.toString()}</td>
      </tr>
    );
  }

  export default TodoRow;