package com.todoapp.rest.webservices.restfulwebservices;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

// Controller
@RestController
public class HelloWorldController {
	
	// GET
	// URL - /hello-world
	// method - 'Hello World"
	// RUN APP and check in browser: http://localhost:8080/hello-world
	@RequestMapping(method=RequestMethod.GET, path= "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	// Can do the same in a shorter way by using GetMapping;
	@GetMapping(path= "/hello-world-get-mapping")
	public String helloWorldAgain() {
		return "Hello World Get Mapping";
	}

}
