package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Driver {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    int id;

    @Column
    private String name;
    private String email;
    private String cabtype;
    private boolean available=true;

    public long getId(){
        return this.id;
    }

    public String getName(){
        return this.name ;
    }

    public String getEmail(){
        return this.email ;
    }
    public String getCabType(){
        return this.cabtype;
    }

    public boolean getAvailable(){
        return this.available;
    }

    public void setName(String n){
        this.name =n;
    }

    public void setEmail(String e ){
        this.email=e;
    }

    public void setCabtype(String c){
        this.cabtype = c;
    }
    public void setAvailable(boolean a){
        this.available=a;
    }
}
