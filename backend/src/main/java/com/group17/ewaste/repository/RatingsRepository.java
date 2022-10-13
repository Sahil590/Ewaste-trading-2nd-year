package com.group17.ewaste.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group17.ewaste.model.Listing;
import com.group17.ewaste.model.Ratings;

@Repository
public interface RatingsRepository extends JpaRepository<Ratings, Long>{
	List<Ratings> findAllByuserid_userid(Long userid);
}
