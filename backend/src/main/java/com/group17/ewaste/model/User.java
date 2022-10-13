package com.group17.ewaste.model;

import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "users")

public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long userid;
	
	@NotBlank
	private String email;
	@NotNull
	private String userinfo;
	@NotBlank
	private String password;
	@NotNull
	private String firstname;
	@NotNull 
	private String lastname;
	
	private Boolean isEnabled;
	
	private Integer points;
	
	@OneToMany(mappedBy = "userid", cascade = CascadeType.ALL)
	private List<Listing> listings; 	
	
	@OneToMany(mappedBy = "userid", cascade = CascadeType.ALL)
	private List<Ratings> ratings;
	
	
	public User() {
	}

	
	public User(Long userid, @NotBlank String email, @NotNull String userinfo, @NotBlank String password,
			@NotNull String firstname, @NotNull String lastname, Boolean isEnabled , Integer points) {
		super();
		this.userid = userid;
		this.email = email;
		this.userinfo = userinfo;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.isEnabled = isEnabled;
		this.points = points;
	}


	public Long getUserid() {
		return userid;
	}

	public void setUserid(Long userid) {
		this.userid = userid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUserinfo() {
		return userinfo;
	}

	public void setUserinfo(String userinfo) {
		this.userinfo = userinfo;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Boolean getIsEnabled() {
		return isEnabled;
	}

	public void setIsEnabled(Boolean isEnabled) {
		this.isEnabled = isEnabled;
	}

	public Integer getPoints() {
		return points;
	}

	public void setPoints(Integer points) {
		this.points = points;
	}
}

	