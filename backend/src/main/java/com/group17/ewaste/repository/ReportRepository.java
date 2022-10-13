package com.group17.ewaste.repository;

import com.group17.ewaste.model.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long>{

	@Query(value = "SELECT * FROM reportedtrades;", nativeQuery = true)
	List<Report> findReport();

}
