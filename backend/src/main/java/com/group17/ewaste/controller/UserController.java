package com.group17.ewaste.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group17.ewaste.model.User;
import com.group17.ewaste.repository.UserRepository;;

@RequestMapping("/")
@RestController
public class UserController {
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	List<User> userList(){	
		return userRepository.findAll();	
	}
	
	@GetMapping("/users/{userid}")
	Optional<User> userPage(@PathVariable("userid")
	Long userid){
		return userRepository.findById(userid);
	}
	
	@PutMapping("/users/{userid}/infoupdate")
	User updateInfo(@PathVariable("userid") Long userid, 
		@Valid @RequestBody User userinfo){
		return userRepository.save(userinfo);
	}
	
	@DeleteMapping("/users/{userid}/delete")
	String deleteUser(@PathVariable("userid") Long userid) {
		userRepository.deleteById(userid);
		return "deleted";		 
	}
	
	@GetMapping("/users/0/points")
	Integer getPoints() {
		User user = userRepository.findById((long) 0).orElseThrow(null);
		return user.getPoints();
	}
}
