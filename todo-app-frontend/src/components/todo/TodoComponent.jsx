import { useState, useEffect } from "react";
import moment from 'moment';
import { ErrorMessage, Field, Form, Formik } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "../../api/todo/AuthenticationService";

const TodoComponent = ({ params: { id, name } }) => {
    const [todo, setTodo] = useState({
        id,
        description: "",
        targetDate: moment(new Date()).format('YYYY-MM-DD'),
    });    

    const validate = (values) => {
        let errors = {};

        if(!values.description) {
            errors.description = 'Enter a Description';
        } else if (values.description.length < 5) {
            errors.description = 'Enter at least 5 characters';
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid target date.'
        }
        return errors;
    }

    const onSubmit = (values) => {
        console.log(values);
        setTodo({...todo, description: values.description, targetDate: values.targetDate});
    }

    useEffect(() => {
        let username = AuthenticationService.getLoggedInUsername();
        console.log(`Update : ${id} for ${username}`);
        
        TodoDataService.retrieveTodo(username, id)
            .then((res) =>
                setTodo({...res.data, targetDate: moment(res.data.targetDate).format('YYYY-MM-DD')})
            );
    }, [])

    useEffect(() => {
        console.log(todo);
    }, [todo])
    
    
    return (
      <div>
        <h1>Todo Update</h1>
        <div className="container">
          <div>{id}</div>
          <div>{name}</div>
          <Formik
            initialValues={todo}
            onSubmit={onSubmit}
            validate={validate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            {(props) => (
              <Form>
                <ErrorMessage
                  name="description"
                  component="div"
                  className="alert alert-warning"
                />
                <ErrorMessage
                  name="targetDate"
                  component="div"
                  className="alert alert-warning"
                />
                <label htmlFor="description">Description</label>
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                  placeholder={todo.description}
                />
                <label htmlFor="targetDate">Target Date</label>
                <Field
                  className="form-control"
                  type="date"
                  name="targetDate"
                  placeholder={todo.targetDate}
                />
                <button className="btn btn-success" type="submit">
                  Save
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
};

export default TodoComponent;