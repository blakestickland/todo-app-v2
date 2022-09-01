//package com.todoapp.rest.webservices.restfulwebservices.todo;
//
//import java.net.URI;
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
//
//import com.todoapp.rest.webservices.restfulwebservices.todo.entity.Todo;
//import com.todoapp.rest.webservices.restfulwebservices.exception.ResourceNotFoundException;
//import com.todoapp.rest.webservices.restfulwebservices.repository.TodoRepository;
//
//@RestController
////@CrossOrigin(origins="http://localhost:4200")
//@RequestMapping("/users/{username}/todos")
//public class TodoResource {
//	
//	@Autowired
//	private TodoRepository todoRepository;
////	private TodoHardcodedTestService todoService;
//	
//	// Get All todos
////	@GetMapping(path = "/users/{username}/todos")
//	@GetMapping
//	public List<Todo> getAllTodos(@PathVariable String username) {
//		return this.todoRepository.findAll();
//	}
//	
//	// Get todo by id
//	@GetMapping("/{id}")
//	public Todo getTodo(
//			@PathVariable String username, @PathVariable long id) {
//		
//		return this.todoRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("Todo not found with id :" + id));	
//	}
//	
//	//Delete todo by id
//	@DeleteMapping("/{id}")
//	public ResponseEntity < Todo > deleteTodo(
//			@PathVariable String username, @PathVariable long id){
//		
//		Todo exisitingTodo = this.todoRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + id));
//        this.todoRepository.delete(exisitingTodo);
//        return ResponseEntity.ok().build();
//    }
//	
//	// Update todo
//	@PutMapping("/{id}")
//	public Todo updateTodo(@RequestBody Todo todo, @PathVariable("id") long id) {
//        Todo existingTodo = this.todoRepository.findById(id)
//            .orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + id));
//        existingTodo.setUsername(todo.getUsername());        
//        existingTodo.setDescription(todo.getDescription());
//        existingTodo.setTargetDate(todo.getTargetDate());
//        existingTodo.setDone(todo.isDone());
//        return this.todoRepository.save(existingTodo);
//    }
//	
//	// Create todo
//	@PostMapping
//    public Todo createTodo(@RequestBody Todo todo) {
//        return this.todoRepository.save(todo);
//    }
//}
//
////package com.todoapp.rest.webservices.restfulwebservices.todo;
////
////import java.net.URI;
////import java.util.List;
////
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.http.HttpStatus;
////import org.springframework.http.ResponseEntity;
////import org.springframework.web.bind.annotation.CrossOrigin;
////import org.springframework.web.bind.annotation.DeleteMapping;
////import org.springframework.web.bind.annotation.GetMapping;
////import org.springframework.web.bind.annotation.PathVariable;
////import org.springframework.web.bind.annotation.PostMapping;
////import org.springframework.web.bind.annotation.PutMapping;
////import org.springframework.web.bind.annotation.RequestBody;
////import org.springframework.web.bind.annotation.RestController;
////import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
////
////@RestController
////@CrossOrigin(origins="http://localhost:4200")
////public class TodoResource {
////	
////	@Autowired
////	private TodoHardcodedTestService todoService;
////	
////	@GetMapping(path = "/users/{username}/todos")
////	public List<Todo> getAllTodos(@PathVariable String username) {
////		return todoService.findAll();
////	}
////	
////	@GetMapping(path = "/users/{username}/todos/{id}")
////	public Todo getTodo(
////			@PathVariable String username, @PathVariable long id){
////		
////		return todoService.findById(id);
////	}
////	
////	@DeleteMapping("/users/{username}/todos/{id}")
////	public ResponseEntity<Void> deleteTodo(
////			@PathVariable String username, @PathVariable long id){
////		
////		Todo todo = todoService.deleteById(id);
////		if(todo != null) {
////			return ResponseEntity.noContent().build();
////		}
////		
////		return ResponseEntity.notFound().build();
////	}
////	
////	@PutMapping("/users/{username}/todos/{id}")
////	public ResponseEntity<Todo> updateTodo(
////			@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
////				
////		Todo todoUpdated = todoService.save(todo);
////		
////		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
////		
////	}
////	
////	@PostMapping("/users/{username}/todos")
////	public ResponseEntity<Void> updateTodo(
////			@PathVariable String username, @RequestBody Todo todo){
////				
////		Todo createdTodo = todoService.save(todo);
////		
////		// Location
////		// Get current resource url
////		// {id}
////		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
////				.path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
////		
////		return ResponseEntity.created(uri).build();
////	}
////}
