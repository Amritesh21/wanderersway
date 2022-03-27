package com.wanderersway.apis.POJOS;

public class Appointment {

    String firstName;
    String lastName;
    String travelDestination;
    String travelMonth;
    String appointmentDateTime;
    String travelBudget;
    String travelCompanion;
    String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

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

    public String getTravelDestination() {
        return travelDestination;
    }

    public void setTravelDestination(String travelDestination) {
        this.travelDestination = travelDestination;
    }

    public String getTravelMonth() {
        return travelMonth;
    }

    public void setTravelMonth(String travelMonth) {
        this.travelMonth = travelMonth;
    }

    public String getAppointmentDateTime() {
        return appointmentDateTime;
    }

    public void setAppointmentDateTime(String appointmentDateTime) {
        this.appointmentDateTime = appointmentDateTime;
    }

    public String getTravelBudget() {
        return travelBudget;
    }

    public void setTravelBudget(String travelBudget) {
        this.travelBudget = travelBudget;
    }

    public String getTravelCompanion() {
        return travelCompanion;
    }

    public void setTravelCompanion(String travelCompanion) {
        this.travelCompanion = travelCompanion;
    }

    /*
    firstName: firstName,
            lastName: lastName,
            travelMonth: travelMonth,
            travelBudget: sessionStorage.getItem('TravelBudget'),
            travelDestination: sessionStorage.getItem('TravelDestination'),
            travelCompanion: sessionStorage.getItem('TravelCompanion'),
            appointmentDateTime: appointmentDateTime
     */

}
