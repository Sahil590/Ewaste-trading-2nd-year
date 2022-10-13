package com.group17.ewaste.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group17.ewaste.exception.ResourceNotFoundException;
import com.group17.ewaste.model.Trades;
import com.group17.ewaste.model.Report;
import com.group17.ewaste.repository.TradeRepository;
import com.group17.ewaste.repository.ReportRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")

public class ReportController {
	
	@Autowired
	private ReportRepository reportRepository;

	@GetMapping("/reports")
	public List<Report> getAllReports(){
		return reportRepository.findAll();
	}
	
	@PostMapping("/reports")
	public Report createReport(@RequestBody @Valid Report report) {
		return reportRepository.save(report);
	}
	

	@DeleteMapping("/reports/{reportid}")
	public ResponseEntity<Map<String, Boolean>> deleteReport(@PathVariable Long reportid){
		Report report = reportRepository.findById(reportid)
				.orElseThrow(() -> new ResourceNotFoundException("There is no completed trade with id " + reportid));
		reportRepository.delete(report);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}
}
