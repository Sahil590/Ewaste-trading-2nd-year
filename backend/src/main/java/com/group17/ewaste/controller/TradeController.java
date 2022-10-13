package com.group17.ewaste.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.group17.ewaste.exception.ResourceNotFoundException;
import com.group17.ewaste.model.Trades;
import com.group17.ewaste.repository.TradeRepository;
import com.group17.ewaste.service.UserService;

@RestController
@RequestMapping("/")
public class TradeController {
	@Autowired
	private TradeRepository TradeRepository;
	
	@Autowired
	private UserService user;
	
	@GetMapping("/trades")
	public List<Trades> getAllTrades(){
		return TradeRepository.findAll();
	}
	
	@PostMapping("/maketrade")
	public Trades makeTrade(@RequestBody Trades trade) {
		user.addPoints(trade.getTradeeId());
		user.addPoints(trade.getTraderId());
		return TradeRepository.save(trade);
	}

	@GetMapping("/trades/{tradeid}")
	public ResponseEntity<Trades> getTradeByID(@PathVariable Long tradeid) {
		Trades trade = TradeRepository.findById(tradeid)
				.orElseThrow(() -> new ResourceNotFoundException("There is no completed trade with id " + tradeid));
		return ResponseEntity.ok(trade);
	}
}
