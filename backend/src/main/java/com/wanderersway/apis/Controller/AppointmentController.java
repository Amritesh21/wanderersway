package com.wanderersway.apis.Controller;

import com.wanderersway.apis.POJOS.Appointment;
import com.wanderersway.apis.Service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("appointment")
@CrossOrigin("*")
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;

    @PostMapping("/add")
    public List<Appointment> addAppointment(@RequestBody Appointment appointment){
       int createdStatus = appointmentService.createAppointment(appointment.getEmail(), appointment);

        return appointmentService.fetchAppointment(appointment.getEmail());
    }

    @GetMapping("/get")
    public List<Appointment> getAppointmentList(@RequestParam("email") String email){
        return appointmentService.fetchAppointment(email);
    }
}
