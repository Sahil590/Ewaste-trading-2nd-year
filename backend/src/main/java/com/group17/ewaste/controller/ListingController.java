package com.group17.ewaste.controller;


import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.group17.ewaste.model.Listing;
import com.group17.ewaste.repository.ListingRepository;


@RequestMapping("/")
@RestController
public class ListingController {
	@Autowired
	private ListingRepository listingRepository;
	
	@GetMapping("/listing")
	List<Listing> Listings(){
		return listingRepository.findAll();
	}
	
	@GetMapping("/listing/{listingid}")
	Optional<Listing> itemPage(@PathVariable("listingid") Long listingid){
		return listingRepository.findById(listingid);
	}
		
	@PostMapping(value = "/listing/create", consumes = {"multipart/form-data"})
	String createListing(@RequestPart("listing") @Valid Listing listing,
			@RequestPart("picture") MultipartFile file) {
		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		listing.setPicture(fileName);
		listingRepository.save(listing);
		String uploadDr = "images/" + fileName ;
		try {
			FileOutputStream output = new FileOutputStream(uploadDr);
			output.write(file.getBytes());
			output.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return "listing created";

	}

	@PostMapping("/listing/{listingid}/infoupdate")
	Listing updateInfo(@PathVariable("listingid") Long listingid,
		@RequestBody @Valid Listing info) {
		return listingRepository.save(info);
	}
	
	@GetMapping("/users/{userid}/listings")
	List<Listing> getUserListings(@PathVariable("userid") Long userid) {
		return listingRepository.findAllByuserid_userid(userid);
	}
	
	@DeleteMapping("/listing/{listingid}/delete")
	String deleteListing(@PathVariable("listingid") Long listingid) {
		Path fileToDelete = Paths.get("images/" + listingRepository.findPicture(listingid));
		try {
			Files.delete(fileToDelete);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		listingRepository.deleteById(listingid);
		return "deleted success";
	}
	
	@GetMapping("/listing/{userid}/fortrade")
	List<Listing> getListingsforTrade(@PathVariable("userid") Long userid){
		return listingRepository.getListingsforTrade(userid);
	}
}
	

