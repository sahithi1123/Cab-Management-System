package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    int id;

    @Column
    private String userName;

    @Column(unique=true)
    private String email;
    private String password;
    private String role;

    public void setUseName(String un){
        this.userName=un;
    }

    public void setEmail(String e){
        this.email=e;
    }

    public void setPassword(String p){
        this.password=p;
    }

    public void setRole(String r){
        this.role=r;
    }

    public String getUserName(){
        return this.userName;
    }

    public String getEmail(){
        return this.email;
    }

    public String getPassword(){
        return this.password;
    }

    public String getRole(){
        return this.role;
    }

    public long getId() {
        return this.id;
    }
}
