package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Booking;
import com.example.demo.model.Driver;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.DriverRepository;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    DriverRepository dr;

    @Autowired
    BookingRepository br;

    @PostMapping("/assign")
    public ResponseEntity<?> assignDriver(@RequestBody Driver d){
        dr.save(d);
        return ResponseEntity.ok("Sucessfully assigned");
    }
    
    @GetMapping("/vall")
    public List<Booking> viewAll(){
        return br.findAll();
    }
   
}
