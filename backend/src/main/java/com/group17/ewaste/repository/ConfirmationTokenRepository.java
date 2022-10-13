package com.group17.ewaste.repository;

import org.springframework.data.repository.CrudRepository;

import com.group17.ewaste.model.ConfirmationToken;

public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, String> {
	ConfirmationToken findByConfirmationToken(String confirmationToken);
}