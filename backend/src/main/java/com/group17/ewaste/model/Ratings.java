package com.group17.ewaste.model;


import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "user_ratings")
public class Ratings {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long ratingid;
	
	@NotNull
	private String review;
	
	@NotNull
	private Integer rating;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "userid", nullable = false)
	private User userid;
	
	public Ratings() {
	}

	public Ratings(Long ratingid, @NotNull String review, @NotNull Integer rating, User userid) {
		this.ratingid = ratingid;
		this.review = review;
		this.rating = rating;
		this.userid = userid;
	}

	public Long getRatingid() {
		return ratingid;
	}

	public void setRatingid(Long ratingid) {
		this.ratingid = ratingid;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public User getUserid() {
		return userid;
	}

	public void setUserid(User userid) {
		this.userid = userid;
	}
	
	
	
}
