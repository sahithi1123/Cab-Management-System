package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
public class UserService {

    @Autowired
    HttpSession session;

    @Autowired
    UserRepository ur;

    public String registerUser(User user) {
        User existuser = ur.findByEmail(user.getEmail());
        if (existuser != null) {
            return "Email already exists";
        }
        ur.save(user);
        return "user Registered Successfully";

    }

    public String userLogin(User user) {
        User existuser = ur.findByEmail(user.getEmail());
        if (existuser != null && existuser.getPassword().equals(user.getPassword())) {
            session.setAttribute("loggedInUser", existuser.getId());
            return "login success";
        }
        return "Invalid email or password";
    }

}
