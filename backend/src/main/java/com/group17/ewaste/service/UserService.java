package com.group17.ewaste.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.group17.ewaste.model.User;
import com.group17.ewaste.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;
	
	public void addPoints(Long userid) {
		User user = userRepository.findById(userid).orElse(null);
		Integer points = user.getPoints();
		points += 500;
		user.setPoints(points);
		userRepository.save(user);
	}
}