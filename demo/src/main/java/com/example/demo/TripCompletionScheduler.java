package com.example.demo;


import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.example.demo.model.Booking;
import com.example.demo.model.Driver;
import com.example.demo.repository.BookingRepository;
import com.example.demo.repository.DriverRepository;

@Component
public class TripCompletionScheduler {
    @Autowired
    BookingRepository br;

    @Autowired
    DriverRepository dr;

    @Scheduled(fixedRate=30000)//evry half second
    public void checkTrips(){
        List<Booking> all=br.findAll();
        System.out.println("checking files");
        for(Booking b:all){
            if(!b.isCompleted() && b.getDriverEmail()!=null){
                LocalDateTime bookingTime=b.getCreatedAt();
                if(Duration.between(bookingTime,LocalDateTime.now()).toMinutes()>=b.getDurationMin()){
                    b.setCompleted(true);
                    b.setStatus("COMPLETED");
                    br.save(b);

                    Driver d=dr.findByEmail(b.getDriverEmail());
                    if(d!=null){
                        d.setAvailable(true);
                        dr.save(d);
                    }
                }
            }
        }
    }

    @Scheduled(fixedRate = 30000)
    public void assignwaitingBooking(){
        List<Booking> waiting =br.findByStatus("BOOKED");
        System.out.println("Checking status");
        for(Booking b : waiting){
            List<Driver> drivers=dr.findByCabtypeAndAvailable(b.getCabType(), true);
            if(!drivers.isEmpty()){
                Driver d=drivers.get(0);
                b.setDriverEmail(d.getEmail());
                b.setStatus("Assigned");
                d.setAvailable(false);
                dr.save(d);
                br.save(b);
            }
        }
    }
}


