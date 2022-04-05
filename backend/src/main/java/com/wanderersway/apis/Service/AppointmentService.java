package com.wanderersway.apis.Service;

import com.wanderersway.apis.Connections.DBConnectionManager;
import com.wanderersway.apis.Constants.AppointmentSQLOperation;
import com.wanderersway.apis.POJOS.Appointment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;

@Service
public class AppointmentService {

    Logger logger = LoggerFactory.getLogger(AppointmentService.class);

    @Autowired
    DBConnectionManager dbConnectionManager;

    public int createAppointment(String email, Appointment appointment){
        try(PreparedStatement createTableIfNotExists = dbConnectionManager.getMySQLConnection().prepareStatement(AppointmentSQLOperation.CREATE_TABLE_QUERY);
         PreparedStatement createAppointmentQuery = dbConnectionManager.getMySQLConnection().prepareStatement(AppointmentSQLOperation.INSERT_APPOINTMENT)){
            createTableIfNotExists.execute();
            createAppointmentQuery.setString(1, appointment.getFirstName());
            createAppointmentQuery.setString(2, appointment.getLastName());
            createAppointmentQuery.setString(3,email);
            createAppointmentQuery.setString(4, appointment.getAppointmentDateTime());
            createAppointmentQuery.setString(5,appointment.getTravelMonth());
            createAppointmentQuery.setString(6, appointment.getTravelBudget());
            createAppointmentQuery.setString(7,appointment.getTravelCompanion());
            createAppointmentQuery.setString(8, appointment.getTravelDestination());
            return createAppointmentQuery.executeUpdate();
        }catch(Exception e){
            logger.error("Error occurred while creating appointment "+ e);
        }
        return 0;
    }

    public List<Appointment> fetchAppointment(String email){
        List<Appointment> appointmentList = new LinkedList<>();
        try(PreparedStatement fetchAppointment = dbConnectionManager.getMySQLConnection().prepareStatement(AppointmentSQLOperation.GET_APPOINTMENT)){
            fetchAppointment.setString(1, email);
            ResultSet appointments = fetchAppointment.executeQuery();
            while (appointments.next()){
                Appointment appointmentFetched = new Appointment();
                appointmentFetched.setFirstName(appointments.getString("firstName"));
                appointmentFetched.setLastName(appointments.getString("lastName"));
                appointmentFetched.setEmail(appointments.getString("email"));
                appointmentFetched.setTravelBudget(appointments.getString("budget"));
                appointmentFetched.setTravelMonth(appointments.getString("travel_month"));
                appointmentFetched.setAppointmentDateTime(appointments.getString("appointment_date"));
                appointmentFetched.setTravelCompanion(appointments.getString("companion"));
                appointmentFetched.setTravelDestination(appointments.getString("destination"));
                appointmentFetched.setStatus(appointments.getString("status"));
                appointmentList.add(appointmentFetched);
            }
        }catch(Exception e){
            logger.error("An error occurred while fetching appointment : "+ e);
        }
        return appointmentList;
    }

    public int cancelAppointment(String email){
        try(PreparedStatement cancelAppointmentQuery = dbConnectionManager.getMySQLConnection().prepareStatement(AppointmentSQLOperation.CANCEL_APPOINTMENT)){
            cancelAppointmentQuery.setString(1,email);
            return cancelAppointmentQuery.executeUpdate();
        }catch(Exception e){
            logger.error("Error occured while deleting appointment "+ e);
        }
        return 0;
    }

}
