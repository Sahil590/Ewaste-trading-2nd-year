package com.group17.ewaste.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "reportedtrades")

public class Report {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reportid")
	private Long reportid;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "tradeid", nullable = false)
	private Trades tradeid;
	
	@Column(name = "reportreason")
	private String reportreason;
	
	public Report() {
		
	}
	
	public Report(Long reportid, Trades tradeid, String reportreason) {
		super();
		this.reportid = reportid;
		this.tradeid = tradeid;
		this.reportreason = reportreason;
	}
	
	public Long getreportid() {
	    return reportid;
	}

	public void setreportid(Long reportid) {
		this.reportid = reportid;
	}
	
	public Trades gettradeid() {
	    return tradeid;
	}

	public void settradeid(Trades tradeid) {
		this.tradeid = tradeid;
	}
	
	public String getreportreason() {
	    return reportreason;
	}

	public void setreportreason(String reportreason) {
		this.reportreason = reportreason;
	}
	
}
