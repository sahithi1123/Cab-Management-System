package com.example.demo.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService uservice;

    @Autowired
    UserRepository ur;

    @PostMapping("/register")
    public ResponseEntity<?> r1(@RequestBody User user) {
        String resp = uservice.registerUser(user);
        if (resp.equals("user Registered Successfully")) {
            return ResponseEntity.status(HttpStatus.CREATED).body("user Registered Successfully");
        }
        return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");

    }

    @PostMapping("/login")
    public ResponseEntity<?> l1(@RequestBody User request) {
        User existuser = ur.findByEmail(request.getEmail());
        String res = uservice.userLogin(request);
        if (res.equals("login success")) {
            Map<String, String> response = new HashMap<>();
            response.put("role", existuser.getRole());
            response.put("email", existuser.getEmail());
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }

}