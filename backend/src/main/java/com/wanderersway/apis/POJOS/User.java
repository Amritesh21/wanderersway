package com.wanderersway.apis.POJOS;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Component
@Configuration
public class User {

    String firstName;
    String lastName;
    @Email
    String emailId;
    @NotNull
    String password;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "{" +
                "firstName : '" + firstName + '\'' +
                ", lastName : '" + lastName + '\'' +
                ", emailId : '" + emailId + '\'' +
                ", password : '" + password + '\'' +
                '}';
    }
}
