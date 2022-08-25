import { useState } from "react";
import TodoRow from "./TodoRow";

const ListTodosComponent = ({ params: { name } }) => {
    const [todos, setTodos] = useState([
      {
        id: 1,
        description: "Learn React",
        done: false,
        targetDate: new Date(),
      },
      {
        id: 2,
        description: "Learn GraphQL",
        done: false,
        targetDate: new Date(),
      },
    ]);
    return (
      <div>
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>target date</th>
              <th>Completed?</th>
            </tr>
          </thead>
          <tbody>
            {
                todos && todos.map(
                    todo =>
                    <TodoRow key={todo.id} todo={todo} />
                )
            }
          </tbody>
        </table>
      </div>
    );
}

export default ListTodosComponent;