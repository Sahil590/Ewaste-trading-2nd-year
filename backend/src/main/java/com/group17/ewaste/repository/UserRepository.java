package com.group17.ewaste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.group17.ewaste.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmailIgnoreCase(String email);
} 
