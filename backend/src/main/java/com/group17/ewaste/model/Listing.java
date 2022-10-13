package com.group17.ewaste.model;
import java.util.Date;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name = "listings")
public class Listing {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column
	private Long listingid;	
	
	@NotNull
	private String info;
	
	@CreationTimestamp
	@Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date dateadded;
	
	@NotBlank
	private String name;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "userid", nullable = false)
	private User userid;
	
	@Column(length = 64)
	private String picture;

	public Listing() {
	}
	
	public Listing(Long listingid, @NotNull String info, Date dateadded,
			@NotBlank String name, User userid, String picture) {
		this.listingid = listingid;
		this.info = info;
		this.dateadded = dateadded;
		this.name = name;
		this.userid = userid;
		this.picture = picture;
	}
	
	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}
	public Long getlistingid() {
		return listingid;
	}

	public void setlistingid(Long listingid) {
		this.listingid = listingid;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public Date getDateadded() {
		return dateadded;
	}

	public void setDateadded(Date dateadded) {
		this.dateadded = dateadded;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public User getUserid() {
		return userid;
	}

	public void setUserid(User userid) {
		this.userid = userid;
	}
	
}
