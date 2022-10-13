package com.group17.ewaste.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.group17.ewaste.model.Listing;

@Repository
public interface ListingRepository extends JpaRepository<Listing, Long>{
	List<Listing> findAllByuserid_userid(Long userid);
	
	@Query(value = "select picture from listings where listingid = :listingid", nativeQuery = true)
	String findPicture(@Param("listingid") Long listingid);
	
	@Query(value = "select * from listings where userid != :userid", nativeQuery = true)
	List<Listing> getListingsforTrade(@Param("userid") Long userid);
}