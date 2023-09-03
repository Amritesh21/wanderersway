/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package servicePackage;

import POJOS.UserLoginDetails;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 *
 * @author amrit
 */
public class CreateUser {
    
    public static boolean createUser(UserLoginDetails userLoginDetails) throws ClassNotFoundException, SQLException{
        Connection connection = DataBaseConnectionDriver.getConnection();
        PreparedStatement userSignUpQuery = connection.prepareStatement("Insert into userDetails(username, password, usertype) values(?,?,?)");
        userSignUpQuery.setString(1, userLoginDetails.getUserName());
        userSignUpQuery.setString(2, userLoginDetails.getPassword());
        userSignUpQuery.setString(3, userLoginDetails.getUserType());
        return userSignUpQuery.execute();
    }
    
}
