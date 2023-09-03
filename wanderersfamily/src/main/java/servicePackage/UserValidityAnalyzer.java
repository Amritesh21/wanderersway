/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package servicePackage;

import POJOS.UserCred;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;

/**
 *
 * @author amrit
 */
public class UserValidityAnalyzer {
    
    private static final HashMap<String,UserCred> userList = new HashMap<>();
    
    private UserValidityAnalyzer(){
    }
    
    private static final UserValidityAnalyzer userValidityAnalyzerObj = new UserValidityAnalyzer();
    
    public static final UserValidityAnalyzer getUserValidityAnalyzerObj(){
        return userValidityAnalyzerObj;
    }
    
    public boolean checkUserCredentials(String username, String password) throws SQLException, ClassNotFoundException{
        Connection connection = DataBaseConnectionDriver.getConnection();
        PreparedStatement statement = connection.prepareStatement("Select * from userDetails where username = ? and password = ?");
        statement.setString(1,username);
        statement.setString(2,password);
        ResultSet rs = statement.executeQuery();
        while(rs.next()){
            String fetched_userName = rs.getString("username");
            String fetched_password = rs.getString("password"); 
            UserCred userCred = new UserCred(fetched_userName, fetched_password);
            userList.put(username, userCred);
        }
        if(userList.containsKey(username)){
            if (!userList.get(username).getPassword().equals(password)) {
             return false;
            } else {
                return true;
            }
        }
        return false;
    }
    
}
