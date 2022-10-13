package com.group17.ewaste.repository;

import com.group17.ewaste.model.Report;
import com.group17.ewaste.model.Trades;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeRepository extends JpaRepository<Trades, Long>{
	
//	@Query(value = "SELECT * FROM completedtrades WHERE tradeeid = 1903987 ORDER BY tradeid DESC", nativeQuery = true)
//	List<Trades> findByUser();

}






