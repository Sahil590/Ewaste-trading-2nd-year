package com.group17.ewaste.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.group17.ewaste.model.Ratings;
import com.group17.ewaste.model.User;
import com.group17.ewaste.repository.RatingsRepository;

@RequestMapping("/")
@RestController
public class RatingsController {
	@Autowired
	private RatingsRepository ratingsRepository;
	
	@GetMapping("/users/{userid}/reviews")
	List<Ratings> getReviews(@PathVariable("userid")
	Long userid){
		return ratingsRepository.findAllByuserid_userid(userid);
	}
	
	@GetMapping("/users/{userid}/{ratingid}")
	Optional<Ratings> getReviewbyId(@PathVariable("userid")
	Long userid, @PathVariable("ratingid") Long ratingid){
		return ratingsRepository.findById(ratingid);
	}
	
	@PostMapping("/users/{userid}/leavereview")
	Ratings createReview(@PathVariable("userid") Long userid,
	  @RequestBody @Valid Ratings review) {
		return ratingsRepository.save(review);
	}
}
