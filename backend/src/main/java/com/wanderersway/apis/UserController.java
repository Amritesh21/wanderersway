package com.wanderersway.apis;

import POJOS.User;
import POJOS.UserLoginCred;
import ResponseClasses.LoginResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin("*")
@RequestMapping("user")
@RestController
@Scope("prototype") // creates different controller objects for each request
public class UserController {

    protected static HashMap<String, User> userMap = new HashMap<>();
    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("add")
    public String addUser(@RequestBody User user){
        if(userMap.containsKey(user.getEmailId())) {
            return "User already exists";
        }else {
            userMap.put(user.getEmailId(), user);
            return user.toString();
        }
    }

    @GetMapping("getAllUsers")
    public Map<String, User> getAllUsers(){
        logger.info(String.valueOf(this));
        return userMap;
    }

    @GetMapping("getUser")
    public String getUser(@RequestParam("email") String email){
        if(userMap.containsKey(email)){
            return userMap.get(email).toString();
        }else{
            return "user not exists";
        }
    }

    @PutMapping("update")
    public String updateUser( @RequestBody User user){
        if(userMap.containsKey(user.getEmailId())) {
            userMap.put(user.getEmailId(), user);
            return user.toString();
        }else{
            return "User not exists";
        }
    }

    @DeleteMapping("delete")
    public String deleteUser(@RequestParam("email") String emailId){
        if(userMap.containsKey(emailId)){
            userMap.remove(emailId);
            return "User has been successfully removed";
        }else{
            return "User not exists";
        }
    }

    @PostMapping(value = "login")
    public LoginResponse userLogin(@RequestBody UserLoginCred userLoginCred) {
        String emailId = userLoginCred.getEmail();
        String password = userLoginCred.getPassword();
        LoginResponse loginResponse = new LoginResponse();
        loginResponse.setValidity(false);
        if ((emailId.trim().equals("") || password.trim().equals("")) && (password == null || emailId == null)) {
            return loginResponse;
        }
        if (userMap.containsKey(emailId) && userMap.get(emailId).getPassword().equals(password)) {
            loginResponse.setValidity(true);
            loginResponse.setUser(userMap.get(emailId));
            return loginResponse;
        } else {
            return loginResponse;
        }
    }
}
