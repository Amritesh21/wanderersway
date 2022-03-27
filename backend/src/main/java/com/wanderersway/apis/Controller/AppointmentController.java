package com.wanderersway.apis.Controller;

import com.wanderersway.apis.POJOS.Appointment;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("appointment")
@CrossOrigin("*")
public class AppointmentController {

    public static List<Appointment> appointmentList= new ArrayList<>();

    @PostMapping("/add")
    public Appointment addAppointment(@RequestBody Appointment appointment){
        appointmentList.add(appointment);
        return appointment;
    }

    @GetMapping("/get")
    public List<Appointment> getAppointmentList(){
        return appointmentList;
    }
}
