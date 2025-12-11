package com.example.demo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private long id;

    @Column
    private String employeeName;
    private String pickUp;
    private String dropLocation;
    private String pickUpTime;
    private String cabType;

    private String bookingDate;
    private String status;

    private String hrEmail;
    String driverEmail;

    private boolean completed=false;
    private int durationMin=2;

    private LocalDateTime createdAt=LocalDateTime.now();

    public void setEmployeeName(String e){
        this.employeeName=e;
    }

    public void setPickUp(String p){
        this.pickUp=p;
    }

    public void setDropLocation(String d){
        this.dropLocation=d;
    }

    public void setPickUpTime(String pt){
        this.pickUpTime=pt;
    }

    public void setCabType(String c){
        this.cabType=c;
    }

    public void setBookingDate(String bd){
        this.bookingDate=bd;
    }

    public void  setStatus(String s){
        this.status=s;
    }

    public void  setHrEmail(String hr){
        this.hrEmail=hr;
    }

    public void  setDriverEmail(String de){
        this.driverEmail=de;
    }
    
    public long getId(){
        return this.id;
    }

    public String getEmployeeName(){
        return this.employeeName ;
    }

    public String getPickUp(){
        return this.pickUp ;
    }

    public String getDropLocation(){
        return this.dropLocation ;
    }

    public String getPickUpTime(){
        return this.pickUpTime;
    }

    public String getCabType(){
        return this.cabType;
    }

    public String getBookingDate(){
        return this.bookingDate;
    }

    public String getStatus(){
        return this.status;
    }

    public String getHrEmail(){
        return this.hrEmail;
    }

    public String getDriverEmail(){
        return this.driverEmail;
    }

    public LocalDateTime getCreatedAt(){
        return this.createdAt;
    }

    public boolean getCompleted(){
        return this.completed;
    }

    public int getDurationMin(){
        return this.durationMin;
    }

    public void setCompleted(boolean b) {
        this.completed=b;
    }

    public boolean isCompleted() {
       return this.completed;
    }
}
