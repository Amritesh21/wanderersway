package com.wanderersway.apis.Constants;

public class AppointmentSQLOperation {

    public static String CREATE_TABLE_QUERY = "Create table if not exists Appointment(firstName varchar(30), lastName varchar(30), email varchar(50), appointment_date varchar(20), travel_month varchar(20), budget varchar(20), companion varchar(20), destination varchar(20), status char(8)) ENGINE=MEMORY";

    public static String INSERT_APPOINTMENT = "Insert into Appointment (firstName, lastName, email, appointment_date, travel_month, budget, companion, destination, status) values (?,?,?,?,?,?,?,?,'booked')";

    public static String CANCEL_APPOINTMENT = "Update Appointment set status = 'canceled' where email = ?";

    public static String GET_APPOINTMENT = "Select * from Appointment where email = ?";

    public static String DELETE_APPOINTMENT = "Delete from Appointment where email = ? and status = 'booked'";
}
