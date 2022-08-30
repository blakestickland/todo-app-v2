import axios from 'axios';

class TodoDataService {
    
    retrieveAllTodosService(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`);
    }

    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    updateTodo(name, id) {
        return axios.patch(`http://localhost:8080/users/${name}/todos/${id}`);
    }

    deleteTodo(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
    }
}

export default new TodoDataService();