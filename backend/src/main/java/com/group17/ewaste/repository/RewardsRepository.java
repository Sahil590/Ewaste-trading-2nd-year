package com.group17.ewaste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.group17.ewaste.model.Rewards;

@Repository
public interface RewardsRepository extends JpaRepository<Rewards, Long> {

}
