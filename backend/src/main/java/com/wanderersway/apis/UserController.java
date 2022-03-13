package com.wanderersway.apis;

import POJOS.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@Scope("prototype") // creates different controller objects for each request
public class UserController {

    private static HashMap<String, User> userMap = new HashMap<>();
    private static Logger logger = LoggerFactory.getLogger(UserController.class);

    @PostMapping("user/add")
    public String addUser(@RequestBody User user){
        if(userMap.containsKey(user.getEmailId())) {
            return "User already exists";
        }else {
            userMap.put(user.getEmailId(), user);
            return user.toString();
        }
    }

    @GetMapping("user/getAllUsers")
    public Map<String, User> getAllUsers(){
        logger.info(String.valueOf(this));
        return userMap;
    }

    @GetMapping("user/getUser")
    public String getUser(@RequestParam String email){
        if(userMap.containsKey(email)){
            return userMap.get(email).toString();
        }else{
            return "user not exists";
        }
    }

    @PutMapping("user/update")
    public String updateUser(@RequestBody User user){
        if(userMap.containsKey(user.getEmailId())) {
            userMap.put(user.getEmailId(), user);
            return user.toString();
        }else{
            return "User not exists";
        }
    }

    @DeleteMapping("user/delete")
    public String deleteUser(@RequestParam String emailId){
        if(userMap.containsKey(emailId)){
            userMap.remove(emailId);
            return "User has been successfully removed";
        }else{
            return "User not exists";
        }
    }

}
