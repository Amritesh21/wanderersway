package com.wanderersway.apis.Connections;

import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Component
public class DBConnectionManager {

    public void SeedAppointmentTable(){

    }

    public Connection getMySQLConnection() throws SQLException {
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost/wanderers_way?user=root&password=indira");
        return connection;
    }
}
