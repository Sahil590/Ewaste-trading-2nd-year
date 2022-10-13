package com.group17.ewaste.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group17.ewaste.model.Rewards;
import com.group17.ewaste.model.User;
import com.group17.ewaste.repository.RewardsRepository;
import com.group17.ewaste.repository.UserRepository;

@RequestMapping("/")
@RestController
public class RewardsController {
	@Autowired
	private RewardsRepository rewardsRepository;
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/rewards")
	List<Rewards> rewardsList(){
		return rewardsRepository.findAll();
	}
	
	@PostMapping("/rewards/new")
	void createReward(@RequestBody Rewards newReward) {
		rewardsRepository.save(newReward);
	}
	
	@PutMapping("/rewards/{rewardid}/redeem")
	String redeemReward(@PathVariable ("rewardid") Long rewardId) {
		User user = userRepository.findById((long) 0).orElseThrow(null);
		Rewards reward = rewardsRepository.findById(rewardId).orElseThrow(null);
		int newPoints = user.getPoints() - reward.getCost();
		user.setPoints(newPoints);
		userRepository.save(user);
		return "points" + newPoints;
	}
}
