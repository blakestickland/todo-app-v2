package com.todoapp.rest.webservices.restfulwebservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.todoapp.rest.webservices.restfulwebservices.todo.Todo;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long>{
	
}
