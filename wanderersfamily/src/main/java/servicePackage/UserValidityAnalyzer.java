/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package servicePackage;

import POJOS.UserCred;
import java.util.HashMap;

/**
 *
 * @author amrit
 */
public class UserValidityAnalyzer {
    
    private static final HashMap<String,UserCred> userList = new HashMap<>();
    
    public UserValidityAnalyzer(){
        UserCred usr = new UserCred("ram", "ram");
        userList.put("ram", usr);
    }
    
    private static final UserValidityAnalyzer userValidityAnalyzerObj = new UserValidityAnalyzer();
    
    public static final UserValidityAnalyzer getUserValidityAnalyzerObj(){
        return userValidityAnalyzerObj;
    }
    
    public boolean checkUserCredentials(String username, String password){
        if(userList.containsKey(username)){
            if (!userList.get(username).getPassword().equals(password)) {
            } else {
                return true;
            }
        }
        return false;
    }
    
}
