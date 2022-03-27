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
    String password;

    String pin;
    String phno;
    String city;
    String state;

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

    public String getPin() {
        return pin;
    }

    public void setPin(String pin) {
        this.pin = pin;
    }

    public String getPhno() {
        return phno;
    }

    public void setPhno(String phno) {
        this.phno = phno;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
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
