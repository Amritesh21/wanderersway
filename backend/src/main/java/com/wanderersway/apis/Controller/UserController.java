package com.wanderersway.apis.Controller;

import com.wanderersway.apis.POJOS.User;
import com.wanderersway.apis.POJOS.UserLoginCred;
import com.wanderersway.apis.ResponseClasses.LoginResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin("*")
@RequestMapping("user")
@RestController
@Scope("prototype") // creates different controller objects for each request
public class UserController {

    protected static HashMap<String, User> userMap = new HashMap<>();
    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    LoginResponse loginResponse; // If methods are of same name then use @Qualifier("loginresponse") where login response is method anme

    @PostMapping("add")
    public LoginResponse addUser(@Valid @RequestBody User user){
        if(userMap.containsKey(user.getEmailId())) {
            loginResponse.setUser(null);
            loginResponse.setValidity(false);
            return loginResponse;
        }else {
            userMap.put(user.getEmailId(), user);
            loginResponse.setUser(user);
            loginResponse.setValidity(true);
            return loginResponse;
        }
    }

    @GetMapping("getAllUsers")
    public Map<String, User> getAllUsers(){
        logger.info(String.valueOf(this));
        return userMap;
    }

    @GetMapping("getUser")
    public String getUser(@Valid @RequestParam(value = "email", required = true) String email){
        if(userMap.containsKey(email)){
            return userMap.get(email).toString();
        }else{
            return "user not exists";
        }
    }

    @PutMapping("update")
    public String updateUser(@Valid @RequestBody(required = true) User user){
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
       // LoginResponse loginResponse = new LoginResponse();
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
