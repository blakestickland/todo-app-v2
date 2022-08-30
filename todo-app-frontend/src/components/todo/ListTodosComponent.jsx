import { useState, useEffect } from "react";
import TodoRow from "./TodoRow";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "../../api/todo/AuthenticationService";

const ListTodosComponent = ({ params: { name }, navigate }) => {
  const [todos, setTodos] = useState(null);
  const [message, setMessage] = useState(null);

  const paramsName = name;
  useEffect((paramsName) => {
    refreshTodos(paramsName);
  }, []);

  const refreshTodos = (username) => {
    TodoDataService.retrieveAllTodosService(username).then((res) =>
      setTodos(res.data)
    );
  };

  const updateTodoClicked = (id) => {
    let username = AuthenticationService.getLoggedInUsername();
    console.log(`Update : ${id} for ${username}`);
    navigate(`/todos/${id}`);
    // TodoDataService.updateTodo(username, id)
    // .then (
    //     response => {
    //         setMessage(`Update of todo ${id} successful!`);
    //         refreshTodos(username);
    //     }
    // )
  };
  // const handleLogin = () => {
  //   // jon, dummy
  //   if (username === "jon" && password === "dummy") {
  //     AuthenticationService.registerSuccessfulLogin(username, password);
  //     navigate(`/welcome/${username}`);
  //     setShowLoginSuccess(true);
  //     setHasLoginFailed(false);
  //   } else {
  //     console.log("Invalid Credentials at login");
  //     setShowLoginSuccess(false);
  //     setHasLoginFailed(true);
  //   }
  // };

  const deleteTodoClicked = (id) => {
    let username = AuthenticationService.getLoggedInUsername();
    // console.log("deleteMethod: ", id + " " + user);
    TodoDataService.deleteTodo(username, id).then((response) => {
      setMessage(`Deletion of todo ${id} successful!`);
      refreshTodos(username);
    });
  };

  return (
    <div>
      <h1>My Todos</h1>
      {message && <div className="alert alert-success">{message}</div>}
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Description</th>
              <th>Target date</th>
              <th>Completed?</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos &&
              todos.map((todo) => (
                <TodoRow
                  key={todo.id}
                  todo={todo}
                  updateTodo={updateTodoClicked}
                  deleteTodo={deleteTodoClicked}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodosComponent;
