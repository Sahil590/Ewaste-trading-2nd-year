package com.group17.ewaste.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name = "rewards")
public class Rewards {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "rewardid")
	private Long rewardid;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "cost")
	private Integer cost;
	
	@Column(name = "dateposted")
	@CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
	private Date dateposted;
	
	@Column(name = "expirydate")
	@Temporal(TemporalType.TIMESTAMP)
	private Date expirydate;

	public Rewards() {
		
	}
		
	public Rewards(Long rewardid, String title, String description, Integer cost, Date dateposted, Date expirydate) {
		super();
		this.rewardid = rewardid;
		this.title = title;
		this.description = description;
		this.cost = cost;
		this.dateposted = dateposted;
		this.expirydate = expirydate;
	}

	public Long getRewardid() {
		return rewardid;
	}

	public void setRewardid(Long rewardid) {
		this.rewardid = rewardid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getCost() {
		return cost;
	}

	public void setCost(Integer cost) {
		this.cost = cost;
	}

	public Date getDateposted() {
		return dateposted;
	}

	public void setDateposted(Date dateposted) {
		this.dateposted = dateposted;
	}

	public Date getExpirydate() {
		return expirydate;
	}

	public void setExpirydate(Date expirydate) {
		this.expirydate = expirydate;
	}
	
	
}
