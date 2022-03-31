package com.wanderersway.apis.Controller;

import com.wanderersway.apis.Constants.HandleValidation;
import com.wanderersway.apis.Constants.UserSQLOperation;
import com.wanderersway.apis.POJOS.User;
import com.wanderersway.apis.POJOS.UserLoginCred;
import com.wanderersway.apis.ResponseClasses.LoginResponse;
import com.wanderersway.apis.Service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
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

    @Autowired
    UserService userService;

    @PostMapping("add")
    public LoginResponse addUser(@Valid @RequestBody User user){
       /* if(userMap.containsKey(user.getEmailId())) {
            loginResponse.setUser(null);
            loginResponse.setValidity(false);
            return loginResponse;
        }else {
            userMap.put(user.getEmailId(), user);
            loginResponse.setUser(user);
            loginResponse.setValidity(true);
            return loginResponse;
        }*/
        int insertedUserResponse = userService.createUser(user);
        User createdUserObj = insertedUserResponse == 1 ? userService.getCreatedUser(user.getEmailId(),"", UserSQLOperation.PURPOSE_CREATED_USER) : null;
        logger.info("Inserted user response " + insertedUserResponse);
        if(createdUserObj.getEmailId() != null){
            loginResponse.setUser(createdUserObj);
            loginResponse.setValidity(true);
            return loginResponse;
        }else{
            loginResponse.setUser(null);
            loginResponse.setValidity(false);
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
    public LoginResponse updateUser(@Valid @RequestBody(required = true) User user){
       /* if(userMap.containsKey(user.getEmailId())) {
            userMap.put(user.getEmailId(), user);
            return user.toString();
        }else{
            return "User not exists";
        }*/
        int valuesUpdated = userService.updateUserDetails(user);
        User updatedUser = valuesUpdated != 0 ? userService.getCreatedUser(user.getEmailId(),"", UserSQLOperation.PURPOSE_UPDATED_USER) : null;
        if(HandleValidation.checkNotNull(updatedUser)){
            loginResponse.setUser(updatedUser);
            loginResponse.setValidity(true);
            return loginResponse;
        }else{
            loginResponse.setUser(user);
            loginResponse.setValidity(true);
            return loginResponse;
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
        User getUserDetails = userService.getCreatedUser(emailId, password, UserSQLOperation.PURPOSE_LOGIN);
        if (HandleValidation.checkNotNull(getUserDetails)) {
            loginResponse.setValidity(true);
            loginResponse.setUser(getUserDetails);
            return loginResponse;
        } else {
            return loginResponse;
        }
    }
}
