package apis;


import POJOS.UserLoginDetails;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import static java.util.Objects.isNull;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import servicePackage.CreateUser;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author amrit
 */

@Path("/signup")
public class SignUp {
    
    @POST
    @Consumes("application/json")
    @Produces("application/json")
    public Map<String, Boolean> registerUserMessage(UserLoginDetails userLoginDetails) throws ClassNotFoundException, SQLException{
        HashMap<String, Boolean> userCreationMessage = new HashMap<>(); 
        if(!isNull(userLoginDetails.getUserName()) && !isNull(userLoginDetails.getPassword())){
            userCreationMessage.put("status", !CreateUser.createUser(userLoginDetails));
        }else{
           userCreationMessage.put("status", false);
        }
        return userCreationMessage;
    } 
    
}
