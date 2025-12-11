package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Booking;


@Repository
public interface BookingRepository extends JpaRepository<Booking,Integer>{
    public Booking  findByHrEmail(String hrEmail);
    public List<Booking> findByStatus(String b);
}
