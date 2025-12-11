package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Driver;

@Repository
public interface DriverRepository extends JpaRepository<Driver, Integer> {

    List<Driver> findByCabtypeAndAvailable(String cabType, boolean available);
    Driver findByEmail(String d);

}