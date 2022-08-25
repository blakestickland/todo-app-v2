import { useState } from "react";
import TodoRow from "./TodoRow";

const ListTodosComponent = () => {
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
        <h1>My Todos</h1>
        <div className="container">
            <table className="table">
            <thead>
                <tr>
                <th>id</th>
                <th>Description</th>
                <th>Target date</th>
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
      </div>
    );
}

export default ListTodosComponent;