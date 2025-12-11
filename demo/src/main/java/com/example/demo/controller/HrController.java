package com.example.demo.controller;


import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Booking;
import com.example.demo.model.Driver;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.DriverRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;



@RestController
@CrossOrigin(origins="http://localhost:5173")
@RequestMapping("/api/hr")
public class HrController {
    @Autowired
    BookingRepository bookingRepo;

    @Autowired
    DriverRepository driverRepo;

    @PostMapping("/bookcab/{hrEmail}")
    public String bookcab(@PathVariable String hrEmail,@RequestBody Booking booking){
        booking.setBookingDate(LocalDate.now().toString());
        booking.setStatus("Booked");
        booking.setHrEmail(hrEmail);
        List<Driver> driver=driverRepo.findByCabtypeAndAvailable(booking.getCabType(),true);
        if (!driver.isEmpty()){
            Driver assignDriver=driver.get(0);
            booking.setDriverEmail( assignDriver.getEmail());
            booking.setStatus("Assigned");
            assignDriver.setAvailable(false);
            driverRepo.save(assignDriver);
        }
        bookingRepo.save(booking);
        return "Booking sucessful";
    }

    @GetMapping("/mybookings/{hremail}")
    public List<Booking> getHrBookings(@PathVariable String hremail){
        return (List<Booking>) bookingRepo.findByHrEmail(hremail);
        // return bookingRepo.findByHrEmailOrderByCreatedAtDesc(email);
    }
    
    
    
}
